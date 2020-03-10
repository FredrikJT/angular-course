import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges {
  @Input() theCurrentNumber: number;
  oddComponents: number[];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {

    if (!(this.theCurrentNumber % 2)) {
      this.oddComponents.push(this.theCurrentNumber);
      console.log('The current number is: ' + this.theCurrentNumber);
    }
  }

}
