import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
})
export class JokeFormComponent {
  @Output() jokeAdded = new EventEmitter<string>();
  jokeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.jokeForm = this.fb.group({
      prompt: ['', [Validators.required, Validators.minLength(150)]],
    });
  }

  get prompt() {
    return this.jokeForm.get('prompt');
  }

  onSubmit() {
    if (this.jokeForm.valid) {
      this.jokeAdded.emit(this.jokeForm.value.prompt);
      this.jokeForm.reset();
    }
  }
}
