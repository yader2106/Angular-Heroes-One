import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.scss']
})
export class HeroeComponent {
  heroe: any;
  constructor(private activatedRoute : ActivatedRoute, private heroesService: HeroesService) {
    this.activatedRoute.params.subscribe( parmtros =>{
      // return console.log(parmtros['id']);
      this.heroe = this.heroesService.getHeroe(parmtros['id']);
      console.log(this.heroe);
    });
  }

}
