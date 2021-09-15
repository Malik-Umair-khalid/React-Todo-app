import "./css/index.css";
import React from "react";
import swal from "sweetalert";

const Header = () => {
  const [value, setValue] = React.useState("My Name IS Umair");
  const [todos, addtodo] = React.useState([]);
  const addTodo = () => {
    let newTodo = [...todos];
    newTodo.push(value);
    addtodo(newTodo);
    setValue("");
  };
  const deleteTodo = (index) => {
    let deltodo = [...todos];
    deltodo.splice(index, 1);
    addtodo(deltodo);
  };
  const deleteAll = () => {
    addtodo([]);
  };
  const update = (i) => {
    swal("please Enter New Update", {
      content: "input",
    }).then((value) => {
      if (value == null) {
      } else {
        swal(`You typed: ${value}`);
        let updateArr = [...todos];
        updateArr.splice(i, 1, value);
        addtodo(updateArr);
      }
    });
  };
  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        value={value}
        className="main-input"
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add Todos"
      />
      <div className = "buttonDiv">
      <button onClick={addTodo}>Add</button>
      <button onClick={deleteAll}>Delete All</button>
      </div>
      {todos.map((todo, index) => (
        
        <ul >
          <li key={index} className = "todos">
            {index + 1}. <input id="input" type="text" disabled value={todo} />
            <button onClick={() => deleteTodo(index)}>❌</button>
            <button onClick={() => update(index)}>✏️</button>
          </li>
        </ul>
      
      ))}
    </>
  );
};

export default Header;
