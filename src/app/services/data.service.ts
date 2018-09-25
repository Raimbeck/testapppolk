import { Injectable } from '@angular/core';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url: string = "https://testapppolk.azurewebsites.net/api/data";

  constructor(private http: HttpClient) { }

  public getTemperatureData(): Observable<any> {
    return this.http.get(`${this.url}/temperature`);
  }

  public getPrecData(): Observable<any> {
    return this.http.get(`${this.url}/precipitation`);
  }

  public getDateRange(start: number, end: number): number[] {
    let result = [];
    let diff = end - start;
    for(var i = 0; i <= diff; i++) 
      result.push(start + i);
    
    return result;
  }
}
