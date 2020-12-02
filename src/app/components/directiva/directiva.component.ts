import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.css']
})
export class DirectivaComponent implements OnInit {

  lenguajes: string[] = ['Typescript', 'Javascript', 'Java', 'Python', 'C++', 'Php']

  habilitar: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  setEnable() {
    this.habilitar = (this.habilitar==true)? false: true; 
  }

}
