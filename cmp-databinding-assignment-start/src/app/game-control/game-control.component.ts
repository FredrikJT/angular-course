import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  constructor() { }

  @Output() increasingNumber = 0;
  ref: NodeJS.Timeout;

  onStartGame() {
    this.ref = setInterval(
      () => {
        console.log('increasing number. Current number: ' + this.increasingNumber);
        this.increasingNumber = this.increasingNumber + 1;
      }, 1000
    );
  }

  onStopGame() {
    clearInterval(this.ref);
  }

  ngOnInit(): void {
  }

}
