import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
})
export class JokeListComponent {
  @Input() jokes: any[] = [];
  @Output() jokeSelected = new EventEmitter<any>();

  selectJoke(joke: any) {
    this.jokeSelected.emit(joke);
  }
}
