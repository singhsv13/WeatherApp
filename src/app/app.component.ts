import { Component, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Weather App';
  city: string = '';
  weatherData: any;
  error: string = '';


  mySubscription !: Subscription;

  constructor(private weatherService : WeatherService){}

  ngOnDestroy(): void {
    this.mySubscription.unsubscribe();
  }

  ngOnInit(): void {}

  search(){
    if(this.city.trim() === ''){
      this.error = 'Please enter valid city name!!!';
    }
    const weatherInfo = this.weatherService.getWeatherReport(this.city.trim());
    this.mySubscription = weatherInfo.subscribe((data)=>{
      this.weatherData = data ;
      console.log(data);
    },(error)=>{
      this.error = 'Failed to fetch weather data. Please enter valid city name!!!';
      console.log(error);
    })
  }

}
