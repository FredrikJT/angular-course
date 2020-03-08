import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-joke-rules',
  templateUrl: './joke-rules.component.html',
  styleUrls: ['./joke-rules.component.css']
})
export class JokeRulesComponent implements OnInit {
  // @Input makes it possible for parent components to access the joke property!
  //@Input is called a decorator
  @Input() joke: {name: string, length?: string, theJoke: string, grading?: string};


  //You can give an @Input element an alias by doing @Input('jokeEl').
  //In this case jokeEl needs to be referenced from outside the fiel it was declared in.

  constructor() { }

  ngOnInit() {
  }

}

export interface Joke {
  name: string;
  length?: string;
  theJoke: string;
  grading?: string;
}
