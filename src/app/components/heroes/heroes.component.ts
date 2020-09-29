import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe} from '../../services/heroes.service'; // Se puede importar la interfaz Héroe para poder consultar las propiedades que tiene esa interfaz.
import { Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor( private _heroesService: HeroesService,
                private router:Router
                ) {
    // console.log("método constructor");
   }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();

    //console.log( this.heroes );
  }

  verHeroe( idx:number ){
    this.router.navigate(['/heroe',idx]);
  }

}
