import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'welcome'
})
export class WelcomePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    console.log(value);
    let newValue = 'Welcome '+value;
    return newValue;
  }

}
