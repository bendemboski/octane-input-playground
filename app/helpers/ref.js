import { helper } from '@ember/component/helper';
import { set } from '@ember/object';

export default helper(function ref([context, propertyName], {update}) {
  const ref = {
    get value() {
      return context[propertyName];
    },
    set value(value) {
      if (update) {
        update(value);
      } else {
        set(context, propertyName, value);
      }
    }
  };
  return ref;
});
