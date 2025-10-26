import { Component, computed, inject, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Question } from '../question/question';
import { QuestionBase } from '../services/controls/base';
import { QuestionControlService } from '../services/questionaire-form-handler';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dynamic',
  providers: [QuestionControlService],
  imports: [Question, ReactiveFormsModule, MatButtonModule],
  templateUrl: './dynamic.html',
  styleUrl: './dynamic.css',
})
export class Dynamic {

  private readonly qcs = inject(QuestionControlService);
  readonly questions = input<QuestionBase<string>[] | null>([]);
  readonly form = computed<FormGroup>(() =>
    this.qcs.toFormGroup(this.questions() as QuestionBase<string>[]),
  );
  payLoad = '';
  onSubmit() {
    this.payLoad = JSON.stringify(this.form().getRawValue());
  }
}
