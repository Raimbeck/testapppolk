import { Injectable } from '@angular/core';
import * as CanvasJS from 'src/canvasjs.min';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  public renderChart(data: any[], containerName: string) {
    try {
      let chart = new CanvasJS.Chart(containerName,
      {
        title:{
          text: containerName
        },
        data: [{        
          xValueType: 'dateTime',
          type: "line",
          dataPoints: data
        }]
      });

      chart.render();
    } catch(ex) {

    }
  }

  public toStampFormat(data: any[]): any[] {
    data.forEach(o => {
      o['x'] = Date.parse(o['t']);
      o['y'] = o['v'];
    });

    return data;
  }
}


