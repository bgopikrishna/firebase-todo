import React from "react";

const CreateTodo = ({ addTodo, onChange }) => {
  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={addTodo}>
          <div className="row">
            <div className="input-field col s10">
              <input
                id="name"
                type="text"
                className="validate"
                required
                onChange={onChange}
              />
              <label htmlFor="name">Add Todo</label>
            </div>
            <div className="input-field col s2">
              <button
                className="btn waves-effect waves-light"
                type="submit"
                name="action"
              >
                <i className="material-icons">add</i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTodo;
