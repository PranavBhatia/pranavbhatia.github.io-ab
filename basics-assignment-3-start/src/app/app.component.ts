import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .count5{
      color: white;
    }
  `]
})
export class AppComponent {

  displayStatus = true;
  buttonClickLogArray = [];
  count = 1;
  
  toggleDisplayStatus(){
    this.displayStatus = !this.displayStatus;
    this.buttonClickLogArray.push(this.count);
    this.count++;
  }
}
