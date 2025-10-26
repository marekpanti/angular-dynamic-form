import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { QuestionBase } from '../services/controls/base';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-question',
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule],
  templateUrl: './question.html',
  styleUrl: './question.css',
})
export class Question {
  readonly question = input.required<QuestionBase<string>>();
  readonly form = input.required<FormGroup>();
  get isValid() {
    return this.form().controls[this.question().key].valid;
  }
}
