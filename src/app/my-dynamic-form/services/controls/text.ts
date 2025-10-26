import { QuestionBase } from "./base";

export class TextboxQuestion extends QuestionBase<string> {
  override controlType = 'textbox';
}
