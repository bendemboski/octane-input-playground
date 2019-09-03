import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RefInput extends Component {
  @action
  handleKeyUp(event) {
    this.args.ref.value = event.target.value;
  }
}
