import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers = [];
  evenNumbers = [];

  onIntervalFired(firedNumber: number) {
    console.log(firedNumber);
    if (firedNumber % 2 !== 0) {
      this.oddNumbers.push(firedNumber);
    } else {
      this.evenNumbers.push(firedNumber);
    }
  }
}
