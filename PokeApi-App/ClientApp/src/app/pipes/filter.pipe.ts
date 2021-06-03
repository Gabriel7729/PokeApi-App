import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  //Filtro Ts
  transform(value: any, arg: any): any {
    const resultPosts = [];
    for(const ListPokemon of value){
      if(ListPokemon.name.indexOf(arg) > -1){
         resultPosts.push(ListPokemon);
      };
    };
    return resultPosts;
  }

}