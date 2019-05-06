import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import CreateTodo from "./CreateTodo";
import { connect } from "react-redux";
import {
  doAddTodo,
  doDeleteTodo,
  doCompleteTodo
} from "../../store/actions/todoActions";
import uniqid from "uniqid";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

export class TodoList extends Component {
  state = {
    text: ""
  };

  onChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  addTodo = e => {
    e.preventDefault();

    const uniq = uniqid();

    this.props.doAddTodo({
      content: this.state.text,
      completed: false,
      id: uniq
    });

    e.currentTarget.reset();
  };

  deleteTodo = todoID => {
    this.props.doDeleteTodo(todoID);
  };

  todoCompleteToggle = (e, todoID) => {
    const todoCompletedState = e.target.checked;

    this.props.doToggleCompleteTodo(todoID, todoCompletedState);
  };

  render() {
    const { todos, auth } = this.props;
    if (!auth.uid) return <Redirect to="/signin" />;
    const todoData = todos && auth.uid ? todos[auth.uid] : {};
    const todosArray = Object.values(todoData);

    return (
      <ul className="collection with-header">
        <li className="collection-header">
          <CreateTodo onChange={this.onChange} addTodo={this.addTodo} />
        </li>

        {todos &&
          todosArray.map(todo => (
            <li key={todo.id} className="collection-item">
              <div>
                <label>
                  <input
                    type="checkbox"
                    onChange={e => this.todoCompleteToggle(e, todo.id)}
                    checked={todo.completed}
                  />
                  <span className={todo.completed ? "strike-text" : ""}>
                    {todo.content}
                  </span>
                </label>

                <button
                  className="btn btn-flat red-text btn-small secondary-content"
                  onClick={() => this.deleteTodo(todo.id)}
                >
                  <i className="material-icons">close</i>
                </button>
              </div>
            </li>
          ))}
      </ul>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    ...props,
    todos: state.firestore.data.todos,
    auth: state.firebase.auth,
    orderedTodos: state.firestore.ordered.todos
  };
};

const mapDispatchToProps = dispatch => ({
  doAddTodo: todo => dispatch(doAddTodo(todo)),
  doDeleteTodo: todoID => dispatch(doDeleteTodo(todoID)),
  doToggleCompleteTodo: (todoID, todoCompletedState) =>
    dispatch(doCompleteTodo(todoID, todoCompletedState))
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect([
    {
      collection: "todos"
    }
  ])
)(TodoList);
