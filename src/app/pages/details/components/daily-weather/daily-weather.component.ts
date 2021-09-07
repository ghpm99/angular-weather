import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as moment from 'moment-timezone';
import { DailyWeather } from 'src/app/shared/models/weather.model';


@Component({
  selector: 'jv-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  
})
export class DailyWeatherComponent  {

  @Input() daily : DailyWeather;
  @Input() timeZone : string;

  get date(): string{
    return moment.unix(this.daily.date).format('DD MMM - dddd');
  }

  get hourSunset(): string{
    return moment.unix(this.daily.weather.sunset).format('HH:mm');
  }

  get hourSunrise(): string{
    return moment.unix(this.daily.weather.sunrise).format('HH:mm');
  }

  get weatherIcon(): string {
    return `http://openweathermap.org/img/wn/${this.daily.weather.icon}@2x.png`;
  }

}
