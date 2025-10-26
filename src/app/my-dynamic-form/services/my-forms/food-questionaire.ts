import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { QuestionBase } from '../controls/base';
import { DropdownQuestion } from '../controls/dropdown';
import { TextboxQuestion } from '../controls/text';
import { CheckQuestion } from '../controls/checkbox';
@Injectable()
export class QuestionService {
  // as observable to simulate BE
  getQuestions() {
    const questions: QuestionBase<string>[] = [
      new DropdownQuestion({
        key: 'favoriteIngredience',
        label: 'Favorite Ingredience',
        options: [
          { key: 'pepper', value: 'Pepper' },
          { key: 'banana', value: 'Banana' },
          { key: 'chocolate', value: 'Chocolate' },
          { key: 'onion', value: 'Onion' },
          { key: 'raspberry', value: 'Raspberry' },
          { key: 'steak', value: 'Steak' },
          { key: 'potato', value: 'Potato' },
          { key: 'tomato', value: 'Tomato' },
        ],
        order: 3,
      }),
      new TextboxQuestion({
        key: 'favoriteFood',
        label: 'Favourite Dish',
        value: 'Pizza',
        type: 'text',
        required: true,
        order: 1,
      }),
      new TextboxQuestion({
        key: 'favouriteDrink',
        label: 'Drink',
        order: 2,
      }),
      new CheckQuestion({
        key: 'isHot',
        label: 'Hot?',
        type: 'checkbox',
        value: 'true',
        required: true,
        order: 4,
      }),
    ];
    return of(questions.sort((a, b) => a.order - b.order));
  }
}
