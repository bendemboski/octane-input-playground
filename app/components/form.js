import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class Form extends Component {
  @tracked values = { ...this.args.initialValues }

  @action
  handleSubmit(e) {
    e.preventDefault();
    this.args.onSubmit(this.values);
  }
}
