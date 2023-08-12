import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminFilter'
})
export class AdminFilterPipe implements PipeTransform {

  transform(hotelDataTable: any,searchBox: any): any {
    console.log('value',hotelDataTable);
    console.log('args',searchBox);
    
    if (!hotelDataTable) {
      return null;
    }
    if (!searchBox) {
      return hotelDataTable;
    }

    let search = searchBox?.toLowerCase();
    return hotelDataTable.filter((element: any) => {
      return JSON.stringify(element).toLowerCase().includes(search)
    })
  }

}
