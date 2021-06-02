import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  closeModal: string;
  filterpost = '';
  public ListPokemon: Poke[];

  constructor(http: HttpClient, @Inject("BASE_URL") baseUrl: string, private modalService: NgbModal) {
    http.get<Poke[]>(baseUrl + "pokeapi").subscribe(result => {
      this.ListPokemon = result;
    }, errror => console.error(errror));
   }

   triggerModal(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
  }

}

interface Poke {
  id: string,
  name: string,
  weight: string,
  Height: string,
  base_experience: string,
  url: string;
}