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
  showSecret = false;
  clicks = ['1 click'];
  nrClicks = 1;

  onClick() {
    this.showSecret = !this.showSecret;
    this.secretMessage = 'Tuna tuna = tuna';
    this.nrClicks = this.nrClicks + 1;
    this.clicks.push(`${this.nrClicks} clicks`);
    console.log(this.clicks);
  }
}
