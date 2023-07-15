import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tabelData: any, searchBox: any): any {
    console.log(tabelData);
    console.log(searchBox);
    //if(!tabelData) return null;
    if (!searchBox) {
      return tabelData;
    }

    let search = searchBox?.toLowerCase();
    return tabelData.filter((element: any) => {
      return JSON.stringify(element).toLowerCase().includes(search)
    })

  }

}
