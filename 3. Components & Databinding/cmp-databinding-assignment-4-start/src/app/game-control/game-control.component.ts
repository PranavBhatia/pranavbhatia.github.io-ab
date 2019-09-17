import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  intervalFunction: number;
  counter = 1;

  constructor() {
  }

  ngOnInit() {
  }

  onStartGame() {
    this.intervalFunction = setInterval(() => {
      this.intervalFired.emit(this.counter++);
    }, 1000);
  }

  onEndGame() {
    clearInterval(this.intervalFunction);
  }

}
