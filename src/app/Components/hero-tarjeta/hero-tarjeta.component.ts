import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-tarjeta',
  templateUrl: './hero-tarjeta.component.html',
  styleUrls: ['./hero-tarjeta.component.scss']
})
export class HeroTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() indx: number;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private rutas:Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  ngOnInit() {
  }

  verheroe () {
    // this.rutas.navigate(['/heroe',this.indx]);
    this.heroeSeleccionado.emit(this.indx);
  }

}
