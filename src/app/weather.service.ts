import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey: string = '484fc9a7e5ca99d7cdbf2279e6cd2268';

  constructor(private http : HttpClient) { }

  getWeatherReport(city : string) : Observable<any>{
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=metric`;
    return this.http.get(apiUrl).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }


}
