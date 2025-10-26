import { Component, inject, Signal, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionBase } from './my-dynamic-form/services/controls/base';
import { QuestionService } from './my-dynamic-form/services/my-forms/food-questionaire';
import { Dynamic } from './my-dynamic-form/dynamic/dynamic';
import { AsyncPipe } from '@angular/common';
import { CheckboxService } from './my-dynamic-form/services/my-forms/checkboxes';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Dynamic, AsyncPipe],
  providers: [QuestionService, CheckboxService],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  questions1: Signal<QuestionBase<string>[]> = toSignal(inject(QuestionService).getQuestions(), {initialValue: []});
  questions2: Signal<QuestionBase<string>[]> = toSignal(inject(CheckboxService).getQuestions(), {initialValue: []});
}
