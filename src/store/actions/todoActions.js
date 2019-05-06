export const doAddTodo = todo => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    const userId = getState().firebase.auth.uid;

    firestore
      .collection(`todos`)
      .doc(`${userId}`)
      .update({
        [todo.id]: todo
      })
      .then(() => {
        dispatch({
          type: "ADD_TODO",
          todo
        });
      });
  };
};

export const doDeleteTodo = todoID => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;

    firestore
      .collection("todos")
      .doc(userId)
      .update({
        [todoID]: firestore.FieldValue.delete()
      })
      .then(() => {
        dispatch({
          type: "DELETE_TODO",
          id: todoID
        });
      });
  };
};

export const doCompleteTodo = (todoID, completedState) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const userId = getState().firebase.auth.uid;
    const todoIDRef = `${todoID}.completed`;

    firestore
      .collection("todos")
      .doc(userId)
      .update({
        [todoIDRef]: completedState
      })
      .then(() => {
        dispatch({
          type: "DELETE_TODO",
          id: todoID
        });
      });
  };
};

export const applyDeleteTodo = (state, action) => {
  const currentTodos = state;
  const newTodos = currentTodos.filter(todo => todo.id !== action.id);

  return newTodos;
};

export const applyCompletedTodo = (state, action) => {
  const currentTodos = state;
  const newTodos = currentTodos.map(todo => {
    if (todo.id === action.id) {
      todo.completed = !todo.completed;
    }
    return todo;
  });

  return newTodos;
};

export const applyAddTodo = (state, action) => {
  const currentTodos = state;
  const newTodos = [...currentTodos, action.todo];

  return newTodos;
};
