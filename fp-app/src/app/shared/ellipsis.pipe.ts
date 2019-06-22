import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  transform(input: string, length?: any): any {
    return input.length > length ? input.slice(0, length) + "..." : input;
  }

}
