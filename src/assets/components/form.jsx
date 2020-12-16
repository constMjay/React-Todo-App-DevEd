import React, { useEffect } from "react";

function Form({
  inputText,
  setInputText,
  todosList,
  filterStatus,
  setTodosList,
  setFilterStatus,
  setSelectedFilterTodos,
}) {
  useEffect(() => {
    getLocalTodos();
  }, []);
  useEffect(() => {
    onClickFilterTodos();
    saveToLocalStorage();
  }, [todosList, filterStatus]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmitTodos = (e) => {
    e.preventDefault(); //Prevent From reloading page
    const generateId = Math.floor(todosList.length + 0.5);
    setTodosList([
      ...todosList,
      {
        id: generateId,
        text: inputText,
        isCompleted: false,
      },
    ]);

    setInputText("");
  };
  const onSelectFilter = (e) => {
    setFilterStatus(e.target.value);
  };
  const onClickFilterTodos = () => {
    switch (filterStatus) {
      case "completed":
        setSelectedFilterTodos(
          todosList.filter((todos) => todos.isCompleted === true)
        );
        break;
      case "uncompleted":
        setSelectedFilterTodos(
          todosList.filter((todos) => todos.isCompleted === false)
        );
        break;
      default:
        setSelectedFilterTodos(todosList);
    }
  };
  // Save to local storage
  const saveToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todosList));
  };
  const getLocalTodos = () => {
    if (localStorage.getItem("todos" === null)) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const localTodos = JSON.parse(localStorage.getItem("todos"));

      setTodosList(localTodos);
    }
  };
  return (
    <React.Fragment>
      <form className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add todo..."
          value={inputText}
          onChange={handleInputChange}
        />
        <div className="btn-container">
          <button
            type="submit"
            className="btn btn-success"
            onClick={handleSubmitTodos}
          >
            <i className="far fa-plus-square"></i>
          </button>
        </div>
      </form>
      {/* Filter Selection Item Here */}
      <select
        className="custom-select custom-select-sm"
        onChange={onSelectFilter}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </React.Fragment>
  );
}

export default Form;
