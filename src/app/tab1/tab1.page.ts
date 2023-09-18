import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit{

  constructor() {}

  ngOnInit(): void {

    let numero = 10;

    // debugger;

    let total = numero + 15;

    total += 15;





    console.log(total)
  }

}
