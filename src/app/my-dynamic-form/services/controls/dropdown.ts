import { QuestionBase } from "./base";

export class DropdownQuestion extends QuestionBase<string> {
  override controlType = 'dropdown';
}
