import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataTransform'
})
export class DataTransformPipe implements PipeTransform {

  transform(value:any) {
    return Math.round(value)
  }

}
