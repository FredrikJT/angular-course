import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Joke } from '../joke-rules/joke-rules.component';

@Component({
  selector: 'app-add-new-joke',
  templateUrl: './add-new-joke.component.html',
  styleUrls: ['./add-new-joke.component.css']
})
export class AddNewJokeComponent implements OnInit {
  //Use the @Output decorator to emit something from the component that should
  // be listeneable to from outside of the component.
  //E.g. in the parent component.
  @Output() jokeAdded = new EventEmitter<Joke>();

  addJoke(aJoke: string, aName: string, aLength: string) {
    this.jokeAdded.emit({theJoke: aJoke, name: aName, length: aLength});
  }

  constructor() { }

  ngOnInit() {
  }

}
