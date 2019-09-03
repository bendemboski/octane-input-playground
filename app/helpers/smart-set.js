import { helper } from '@ember/component/helper';

export default helper(function smartSet([context, propertyName]) {
  console.log(context)
  return (event) => {
    // TODO: add cases for other types of events, and when there is no event
    context[propertyName] = event.target.value;
  }
});
