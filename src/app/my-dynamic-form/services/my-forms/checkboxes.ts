import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { QuestionBase } from '../controls/base';
import { CheckQuestion } from '../controls/checkbox';
@Injectable()
export class CheckboxService {
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new CheckQuestion({
        key: 'Are you sick?',
        label: 'Sick?',
        type: 'checkbox',
        value: 'true',
        required: true,
        order: 1,
      }),
      new CheckQuestion({
        key: 'Are you ok?',
        label: 'Ok?',
        type: 'checkbox',
        value: 'true',
        required: true,
        order: 2,
      }),
      new CheckQuestion({
        key: 'Are you hungry?',
        label: 'Hungry?',
        type: 'checkbox',
        value: 'true',
        required: true,
        order: 3,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
