import { helper } from '@ember/component/helper';

export default helper(function ref([context, propertyName]) {
  const ref = {
    get value() {
      return context[propertyName];
    },
    set value(value) {
      context[propertyName] = value;
    }
  };
  return ref;
});
