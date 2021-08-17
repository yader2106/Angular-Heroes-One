import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servicios/heroes.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes_componente: Heroe[];

  constructor(private _heroesService:HeroesService) { }

  ngOnInit() {
    this.heroes_componente = this._heroesService.getHeroes();
    console.log(this.heroes_componente);
  }

}
