import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, locale?: any, format?: any): any {
    let date = new Date(value);
    let now = new Date().getTime() / 1000;
    let then = new Date(value).getTime() / 1000;
    let hours = Math.floor((now - then) / 3600);
    let minutes = Math.floor((now - then) % 3600 / 60);

    let result;

    if (hours > 24) {
      switch (format) {
        case 'full':
          result = date.toLocaleString(locale, {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'});
          break;
        case 'short':
          result = date.toLocaleString(locale, {weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'});
          break;
        default:
          result = date.toLocaleString(locale);
          break;
      }
    } else if (hours > 0) {
      result = `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
    } else {
      result = `${minutes} ${minutes === 1 ? 'minute' : 'minutes'} ago`;
    }

    return result;
  }
}
