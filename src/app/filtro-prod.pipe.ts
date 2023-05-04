import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroProd'
})
export class FiltroProdPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
