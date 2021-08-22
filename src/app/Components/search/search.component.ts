import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';
import { Heroe } from '../../servicios/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  heroes_encontrados: Heroe[];
  term:string;

  constructor(private activateRoute: ActivatedRoute, private heroesServicio: HeroesService) {
    this.activateRoute.params.subscribe( parametros => {
      // console.log(parametros['termino']);
      // console.log(this.heroesServicio.buscarHeroes(parametros['termino']));
      this.term = parametros['termino'];
      this.heroes_encontrados = this.heroesServicio.buscarHeroes(parametros['termino']);
      console.log(this.heroes_encontrados = this.heroesServicio.buscarHeroes(parametros['termino']));
    });
   }

  ngOnInit() {
  }
}
