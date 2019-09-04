import { helper } from '@ember/component/helper';

export default helper(function trimAndSet() {
  return function({ value, set }) {
    set(value.trim());
  };
});
