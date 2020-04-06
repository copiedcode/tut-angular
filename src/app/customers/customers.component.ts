import  { Component, OnInit } from "@angular/core";

import { ICustomer } from '../shared/interface';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html'
})

export class CustomersComponent implements OnInit {
  title: string;
  people: ICustomer[];
  isVisible = true;

  constructor(){}

  ngOnInit(){
    this.title = 'Customers';
    this.people = [
      { id: 1, name: 'John Doe', city: 'Phoenix', orderTotal: 9.99, customerSince: new Date(2014, 7, 10) },
      { id: 2, name: 'Jane Doe', city: 'Chandler', orderTotal: 19.99, customerSince: new Date(2017, 2, 22)},
      { id: 3, name: 'Michelle Thomas', city: 'Seattle', orderTotal: 99.99, customerSince: new Date(2002, 10, 31)},
      { id: 4, name: 'Jim Thomas', city: 'New York', orderTotal: 599.99, customerSince: new Date(2002, 10, 31)},
      { id: 5, name: 'Raphael Coding', city: 'Vienna', orderTotal: 89.99, customerSince: new Date(2020, 4, 6), }
    ];
  }
}