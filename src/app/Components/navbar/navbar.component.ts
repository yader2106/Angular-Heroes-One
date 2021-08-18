import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private rutas:Router) { }

  ngOnInit() {
  }

  buscartermino(termino: string) {
    if (termino != '') {
      this.rutas.navigate(['/search', termino]);
    }
  }
}
