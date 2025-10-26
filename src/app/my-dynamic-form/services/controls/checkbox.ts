import { QuestionBase } from "./base";

export class CheckQuestion extends QuestionBase<string> {
  override controlType = 'checkbox';
}
