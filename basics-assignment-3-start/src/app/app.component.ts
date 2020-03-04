import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  secretMessage: string;
  clicks = ['1 click'];
  nrClicks = 1;

  onClick() {
    this.secretMessage = 'Tuna tuna = tuna';
    this.nrClicks = this.nrClicks + 1;
    this.clicks.push(`${this.nrClicks} clicks`);
    console.log(this.clicks);
  }

  getColor() {
    console.log('getting color');
    if (this.nrClicks > 4) {
      return 'blue';
    }
  }
}
