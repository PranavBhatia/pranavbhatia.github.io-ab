import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // selects element by element
  //selector: '[app-servers]', // selects the element by attribute
  // selector: '.app-servers', // selects the element by class
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

}
