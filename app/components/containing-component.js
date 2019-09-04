import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class ContainingComponent extends Component {
  @tracked inputValue = 'asdf';
  @tracked onSetCalls = 0;

  initialValues = {
    inputValue: 'asdf',
  }

  @action
  setInputValue(event) {
    this.inputValue = event.target.value;
  }

  @action
  trimAndSetInputValue(value) {
    this.inputValue = value.trim();
  }

  @action onSet() {
    this.onSetCalls += 1;
  }

  @action
  persistInputValue(values) {
    this.inputValue = values.inputValue;
  }
}
