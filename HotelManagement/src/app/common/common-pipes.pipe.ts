import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commonPipes'
})
export class CommonPipesPipe implements PipeTransform {

  transform(value:any,args:any): unknown {
    return null;
  }

}
