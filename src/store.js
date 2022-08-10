import {
  createAction,
  createReducer,
  configureStore,
  createSlice,
} from '@reduxjs/toolkit';

// const addToDo = createAction('ADD');
// const deleteToDo = createAction('DELETE');

/* createReducer 사용
	const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});
*/

const toDos = createSlice({
  name: 'toDoReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload),
  },
});

const store = configureStore({ reducer: toDos.reducer });

export const { add, remove } = toDos.actions;

export default store;
