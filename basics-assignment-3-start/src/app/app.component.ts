import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
  .whiteText {
    color: white;
  }
`]
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
}
