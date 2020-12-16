import React from "react";

function Table({ todosList, setTodosList, selectedFilterTodos }) {
  const deleteOnClick = (todo) => {
    setTodosList(todosList.filter((todos) => todos.id !== todo.id));
  };
  const completeOnClick = (todo) => {
    setTodosList(
      todosList.map((todos) => {
        if (todos.id === todo.id) {
          return {
            ...todos,
            isCompleted: !todos.isCompleted,
          };
        }
        return todos;
      })
    );
  };
  return (
    <table className="table table-striped table-dark mt-3">
      <thead>
        <tr>
          <th>Note</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody className="tableTodoOutput">
        {selectedFilterTodos.map((todo, key) => {
          return (
            <tr key={key}>
              <td className={`${todo.isCompleted ? "completed" : ""}`}>
                {todo.text}
              </td>
              <td>
                <button
                  className="btn-success"
                  onClick={() => completeOnClick(todo)}
                >
                  <i className="fas fa-check-square"></i>
                </button>
                <button
                  className="btn-danger"
                  onClick={() => deleteOnClick(todo)}
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
