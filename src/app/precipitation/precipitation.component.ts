import { ChartService } from './../services/chart.service';
import { DataService } from './../services/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'underscore';
import { Subscription } from '../../../node_modules/rxjs';


@Component({
  selector: 'app-precipitation',
  templateUrl: './precipitation.component.html',
  styleUrls: ['./precipitation.component.scss']
})
export class PrecipitationComponent implements OnInit, OnDestroy {
  dates: number[];
  data: any[];
  startDate: number = 1881;
  endDate: number = 2006;
  inProgress: boolean = true;
  dataSubscription: Subscription;

  constructor(private dataService: DataService, private chartService: ChartService) { }

  ngOnInit() {
    this.dates = this.dataService.getDateRange(1881, 2006);

    this.dataSubscription = this.dataService.getPrecData().subscribe((response: any[]) => {
      this.inProgress = true;
      this.data = response;

      this.chartService.toStampFormat(this.data);
      this.chartService.renderChart(this.data, 'Осадки');
      this.inProgress = false;
    });
  }

  precDateChange() {
    let _startDate = new Date(`${this.startDate}-01-01`).toISOString().split('T')[0];
    let _endDate = new Date(`${this.endDate}-12-31`).toISOString().split('T')[0];

    let start_date_index = _.findIndex(this.data, function(item: {x: number, y: number, t: string}, index, arr, startDate = _startDate) {
      return item.t == startDate;
    });

    let end_date_index = _.findLastIndex(this.data, function(item: {x: number, y: number, t: string}, index, arr, endDate = _endDate) {
      return item.t == endDate;
    });

    let newData = this.data.slice(start_date_index, end_date_index + 1);
    console.log(newData);

    this.chartService.renderChart(newData, 'Осадки');
  }

  ngOnDestroy() {
    if(this.dataSubscription) this.dataSubscription.unsubscribe();
  }

}
