import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Angular2Txt } from 'angular2-txt/Angular2-txt';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  //strings para cerrar el modal de Bootstrao y el otro string para filtrar los Pokemons
  closeModal: string;
  filterpost = '';

  //Lista donde se guardan los datos de todos los pokemons, la cual es de tipo interface 'Poke'
  public ListPokemon: Poke[];

  //Lista para guardar los datos del pokemon seleccionado por el usuario en un archivo txt
  DetallePokemon: any[] = [
    { ID: ''},
    { Name: ''},
    { Type: ''},
    { Weight: ''},
    { Height: ''},
    { Ability: ''},
    { Hide_Ability: ''}
  ]

  //Metodo constructor que obtiene la informacion enviada de mi Backend de C# mediante una Api
  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string, private modalService: NgbModal) {
    http.get<Poke[]>(baseUrl + "pokeapi").subscribe(result => {
      //Guardo los datos de los pokemos obtenidos de mi Backend a mi lista
      this.ListPokemon = result;    
      console.log(this.ListPokemon);
    }, errror => console.error(errror)
    );
   }

   //Metodo que sirve para desplegar el modal
   triggerModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  //Metodo que cierra el modal de Bootstrap
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  //Metodo que se encarga de recibir los parámetros para almacenar los datos del pokemon en el 
  //archivo txt. También este método solo se ejecuta cuando el pokemon tiene dos tipos.
  Txt(id: string, name: string, type: string, type2: string, weight: string, height: string, ability: string, hide_ability: string){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '',
      decimalseparator: '.',
      showTitle: true,
      useBom: true
    };

    //En esta lista es donde se almacena la información del Pokemon en concreto
    this.DetallePokemon = [
      {ID: ('ID: ' + id)},
      {Name: ('Nombre: ' + name)},
      {Name: ('Tipo: ' + (type + ' - ' + type2))},
      {Name: ('Peso: ' + (weight + ' kg'))},
      {Name: ('Altura: ' + (height + ' m'))},
      {Name: ('Habilidad: ' + ability)},
      {Name: ('Hab. Oculta: ' + hide_ability)}
    ];

    //Mediante esto, el archivo txt se crea
    new Angular2Txt(this.DetallePokemon, 'DatosPokemon', options);
  }

  //Metodo que se encarga de recibir los parámetros para almacenar los datos del pokemon en el 
  //archivo txt. También este método solo se ejecuta cuando el pokemon tiene un solo tipo.
  Txt1(id: string, name: string, type: string, weight: string, height: string, ability: string, hide_ability: string){
    var options = { 
      fieldSeparator: ',',
      quoteStrings: '',
      decimalseparator: '.',
      showTitle: true,
      useBom: true
    };

    //En esta lista es donde se almacena la información del Pokemon en concreto
    this.DetallePokemon = [
      {ID: ('ID: ' + id)},
      {Name: ('Nombre: ' + name)},
      {Name: ('Tipo: ' + type)},
      {Name: ('Peso: ' + (weight + ' kg'))},
      {Name: ('Altura: ' + (height + ' m'))},
      {Name: ('Habilidad:  ' + ability)},
      {Name: ('Hab. Oculta: ' + hide_ability)}
    ];

    //Mediante esto, el archivo txt se crea
    new Angular2Txt(this.DetallePokemon, 'DatosPokemon', options);
  }

  ngOnInit() {
  }

}

//Interfaz donde se almacena todos los datos del los pokemos
interface Poke {
  id: string,
  name: string,
  sprites: {front_default: string},
  abilities: [
    {is_hidden: boolean, slot: string, ability: {name: string, url: string}},
    {is_hidden: boolean, slot: string, ability: {name: string, url: string}}
    ],
  types: [
    {slot: string, type: {name: string, url: string} },
    {slot: string, type: {name: string, url: string} }
  ]  
  weight: string,
  height: string,
  base_experience: string,
}
