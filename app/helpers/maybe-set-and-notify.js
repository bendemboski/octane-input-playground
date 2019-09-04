import { helper } from '@ember/component/helper';

export default helper(function maybeSetAndNotify([ onSet ]) {
  return function({ oldValue, value, set }) {
    if (value.trim() === oldValue) {
      return;
    }
  
    let toSet;
    if (!value.includes('_')) {
      toSet = value;
    } else {
      toSet = 'invalid input';
    }
  
    set(toSet);
    onSet(toSet);
  };
});
