import { legacy_createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = (count = 0, action) => {
  if (action.type === 'ADD') {
    return count + 1;
  }
  if (action.type === 'MINUS') {
    return count - 1;
  }
  return count;
};

const countStore = legacy_createStore(countModifier);

const onChange = () => {
	number.innerText = countStore.getState()
}

countStore.subscribe(onChange)

add.addEventListener('click', () => countStore.dispatch({ type: 'ADD' }));
minus.addEventListener('click', () => countStore.dispatch({ type: 'MINUS' }));
