import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-joke-detail',
  templateUrl: './joke-detail.component.html',
})
export class JokeDetailComponent {
  @Input() joke: any;
}
