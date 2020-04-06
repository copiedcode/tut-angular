import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-customers></app-customers>
  `
})

export class AppComponent implements OnInit {

  constructor(){

  }
  ngOnInit(){
    //Service Call

  }
}

//ng g c customers
//short for -> ng generate component "customers" -> create 4 files
