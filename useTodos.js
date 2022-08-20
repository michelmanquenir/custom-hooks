import { useEffect, useReducer } from 'react';
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
 //intenta parsear todo lo de todos si no regresa un array vacio
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
  const [ todos, dispatch ] = useReducer(todoReducer, [], init);

  //necesito ejecutar un efecto secundario cuando los todos cambian
  useEffect(() => {
  //guardamos los todos en localStorage
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  //accion a mandar al reducer
  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add todo',
      payload: todo
    }
  //se envia con dispatch el action
    dispatch(action);
  }

  const handleDeleteTodo = (id) => {
    dispatch({
      type: '[TODO] Delete todo',
      payload: id
    });
  }

  const handleToggleTodo = (id) => {
    dispatch({
      type: '[TODO] Toggle todo',
      payload: id
    });
  }

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => !todo.done).length
  }
}