import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private weatherSvc: WeatherService) { }

  getWeather(city: string, api: string){
    console.log("Get Weather API")
  }
}
