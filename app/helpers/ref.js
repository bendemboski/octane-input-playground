import { helper } from '@ember/component/helper';

export default helper(function ref([context, propertyName], {update}) {
  const ref = {
    get value() {
      return context[propertyName];
    },
    set value(value) {
      if (update) {
        update(value);
      } else {
        context[propertyName] = value;
      }
    }
  };
  return ref;
});
