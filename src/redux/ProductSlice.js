import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  todoList: [],
  todoname: '',
  doneTodo: []
}

export const todoSlice = createSlice({
  name: 'todoArr',
  initialState: defaultState,
  reducers: {

    addTodo: (state, action) => {
      state.todoname = action.payload
      state.todoList = ({ tdName: state.todoname, compT: false });
    },
    makeTodo: (state, action) => {
      state.valTodo = action.payload
      if (state.valTodo.complet === true) {
        state.doneTodo = ({ tdName: state.valTodo.tdname, complet: state.valTodo.complet });
      } else {
        state.doneTodo = ({ tdName: state.valTodo.tdname, complet: false });
        // console.log(state.doneTodo);
      }
    },

  },
})

export const { addTodo, makeTodo } = todoSlice.actions

export default todoSlice.reducer