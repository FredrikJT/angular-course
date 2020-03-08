import { Component } from '@angular/core';
import { Joke } from './joke-rules/joke-rules.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  bestJoke: Joke = {name: 'the tomato and the road', length: 'short', theJoke: 'A tomato then ketchup', grading: 'the worst'};

  jokeElements: Joke[] = [this.bestJoke];
  // jokeElements = [{name: 'the tomato and the road', length: 'short', theJoke: 'A tomato then ketchup', grading: 'the worst'}];

  onJokeAdded(incompleteJoke: Joke) {
    const completeJoke = {...incompleteJoke, grading: 'the worst', length: 'short'};
    this.jokeElements.push(completeJoke);
  }
}
