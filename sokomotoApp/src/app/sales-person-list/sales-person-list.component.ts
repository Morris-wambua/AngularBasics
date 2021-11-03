import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {


  //create an array of objects
  salesPersonList: SalesPerson [] = [

    new SalesPerson('Morris','Kioko','morris.kioko@love.com',234004),
    new SalesPerson('Polly','Fill','polly.fill@love.com',267728),
    new SalesPerson('Jennifer','murage','jeniffer.murage@love.com',3442234),
    new SalesPerson('Claire','Muffy','claire.muffy@love.com',3876732),
    new SalesPerson('Mega','Tron','mega.tron@love.com',456754)
  ];

  constructor() { };

  ngOnInit(): void {
  }

}
