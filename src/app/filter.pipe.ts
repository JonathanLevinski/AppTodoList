import { Pipe, PipeTransform } from '@angular/core';
import { BodyComponent } from './body/body.component';
import { Tarefa } from './tarefa.model';


@Pipe({
  name: 'filter',
  pure: false
})  
export class FilterPipe implements PipeTransform {
  
  transform(items: any[], filter: Tarefa): any {  
    if (!items || !filter) {  
        return items;  
    }  
    return items.filter(item => item.status.toLowerCase().indexOf(filter.status) !== -1);  
}  

}