import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
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
