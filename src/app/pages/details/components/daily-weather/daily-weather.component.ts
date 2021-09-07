import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as moment from 'moment-timezone';
import { Units } from 'src/app/shared/models/units.enum';
import { DailyWeather } from 'src/app/shared/models/weather.model';
import { unitToSymbol } from 'src/app/shared/utils/units.utils';


@Component({
  selector: 'jv-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush,
  
})
export class DailyWeatherComponent  {

  @Input() daily : DailyWeather;
  @Input() timeZone : string;
  @Input() unit: Units

  get date(): string{
    return moment.unix(this.daily.date).format('DD MMM - dddd');
  } 

  get weatherIcon(): string {
    return `http://openweathermap.org/img/wn/${this.daily.weather.icon}@2x.png`;
  }

  get unitSymbol() {
    return unitToSymbol(this.unit);
  }

  unixToHourMinute(value: number): string {
    return moment.unix(value).tz(this.timeZone).format('HH:mm');
  }

}
