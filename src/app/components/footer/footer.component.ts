import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  autor: any = {
    nombre: 'Fernando',
    apellido: 'Cusco',
    edad: '24',
    universidad: 'UPS'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
