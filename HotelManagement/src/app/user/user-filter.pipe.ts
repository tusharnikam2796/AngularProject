import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(dataFromTable:any,searchBox:any): any {
       if (!dataFromTable) {
        return null;
       }
       if (!searchBox) {
        return dataFromTable;
       }

    let search =searchBox?.toLowerCase();
     return dataFromTable.filter((element:any)=>{
       return JSON.stringify(element).toLowerCase().includes(search);
      })
  }

}
