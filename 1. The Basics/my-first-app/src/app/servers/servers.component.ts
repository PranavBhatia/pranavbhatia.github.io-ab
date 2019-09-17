import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-servers', // selects element by element
  //selector: '[app-servers]', // selects the element by attribute
  // selector: '.app-servers', // selects the element by class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server is currently created!";
  serverName = '';
  serverCreated = false;
  serversArray = ['Test Server 1', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serversArray.push(this.serverName);
    console.log(this.serversArray);
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
