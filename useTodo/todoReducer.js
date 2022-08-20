export const todoReducer = (initialState = [], action) => {

  switch ( action.type ) {

      case '[TODO] Add todo':
        return [...initialState, action.payload];

      case '[TODO] Delete todo':
        //regresare todos los siempre que el todo.id sea diferente del todo que se quiere eliminar
        return initialState.filter(todo => todo.id !== action.payload);

      case '[TODO] Toggle todo':
        return initialState.map(todo => {
          if (todo.id === action.payload) { //id todo
            return {
              ...todo,
              done: !todo.done
            }
          }
          return todo;
        });
    default:
        return initialState;
  }
}