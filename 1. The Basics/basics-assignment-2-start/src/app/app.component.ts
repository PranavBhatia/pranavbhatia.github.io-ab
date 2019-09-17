import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username = '';
  usernameIsEmpty = true;

  onUpdateUsername(event: Event) {
    if (this.username !== '')
      this.usernameIsEmpty = false;
    else
      this.usernameIsEmpty = true;
  }

  resetUsername() {
    this.username = '';
    this.usernameIsEmpty = true;
  }
}
