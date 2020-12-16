import React, { useState } from "react";
import Form from "./form";
import Table from "./table";

function Todo() {
  const [inputText, setInputText] = useState("");
  const [todosList, setTodosList] = useState([]);
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedFilterTodos, setSelectedFilterTodos] = useState([]);

  return (
    <main className="main">
      <div className="container">
        <div className="todo">
          <div className="row">
            <div className="todo__upperContent"></div>
          </div>
          <div className="row">
            <div className="col-sm-12 mt-3">
              <div className="todo__bottomContent">
                <div className="upperPart">
                  <Form
                    inputText={inputText}
                    setInputText={setInputText}
                    todosList={todosList}
                    setTodosList={setTodosList}
                    filterStatus={filterStatus}
                    setFilterStatus={setFilterStatus}
                    setSelectedFilterTodos={setSelectedFilterTodos}
                  />
                </div>
                <div className="bottomPart">
                  <Table
                    todosList={todosList}
                    setTodosList={setTodosList}
                    selectedFilterTodos={selectedFilterTodos}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Todo;
