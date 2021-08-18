import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-tarjeta',
  templateUrl: './hero-tarjeta.component.html',
  styleUrls: ['./hero-tarjeta.component.scss']
})
export class HeroTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() indx: number;

  constructor(private rutas:Router) { }

  ngOnInit() {
  }

  verheroe () {
    this.rutas.navigate(['/heroe',this.indx]);
  }

}
