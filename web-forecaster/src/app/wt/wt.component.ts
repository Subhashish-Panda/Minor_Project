import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { WeatherService} from '../weather.service';

@Component({
  selector: 'app-wt',
  templateUrl: './wt.component.html',
  styleUrls: ['./wt.component.css']
})
export class WtComponent implements OnInit {
  
  //Required variables.
  public weather:any;//Storing all the necessary information from the observable.
  public weather_arr:any[];//Storing the forecast array.
  public display:boolean[]=[false,false,false,false,false,false,false];
  seven_day:boolean;
  mode:string="Dark mode";
  s_mode:string="Day mode";
  swap_var:string;
  
  //Performing dependency injection of weather service inside "wt component". 
  constructor(public wt:WeatherService){}
  
  //To get the location of user from their web browser,we would be using the HTML5 geolocation API.
  ngOnInit(): void 
  {
    if(navigator.geolocation)
    {
      navigator.geolocation.getCurrentPosition(position=>{
        this.wt.getWeather(position.coords).subscribe(result => {this.weather=result['dailyForecasts'].forecastLocation;this.weather_arr=this.weather.forecast;console.log(this.weather);});
      });
    }
    else
    {
      console.log("The browser doesn't support geolocation API");
    }
  }

  gen(i)
  {
  this.display[i]=!this.display[i];
  }
  gen1()
  {
  this.seven_day=!this.seven_day;
  }


  //Function to change mode "Night mode/Day mode".
  change_mode(){
  document.getElementById('c').classList.toggle('dark-mode');
  this.swap_var=this.mode;
  this.mode=this.s_mode;
  this.s_mode=this.swap_var;
  }
  
  //For converting string value to integer value.
  getval(temp1:string,temp2:string):number
  {
  return (Number(temp1)+Number(temp2))/2;
  }

}
