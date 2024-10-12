import { useEffect, useState } from "react";

const Body = () => {
  const [counter, setCouner] = useState(0);
  const [counter2, setCouner2] = useState(0);
  useEffect(() => {
    console.log("called");
  }, [counter2]);

  return (
    <button
      onClick={() => {
        setCouner(counter + 1);
      }}
    >
      Click me
    </button>
  );

  //   const [inputVal, setInputVal] = useState("");
  //   const [todos, setTodos] = useState([]);

  //   //console.log("input val", inputVal);

  //   const addTaskHandler = () => {
  //     const updatedTodos = [...todos, inputVal];
  //     console.log("upadted", updatedTodos);

  //     setTodos(updatedTodos);
  //     console.log("todos", todos);
  //   };

  //   return (
  //     <div className="container">
  //       <h1>Todo List</h1>
  //       <input
  //         type="text"
  //         placeholder="Enter task"
  //         value={inputVal}
  //         onChange={(e) => setInputVal(e.target.value)}
  //       />
  //       <div>
  //         <Content todos={todos} />
  //       </div>
  //       <div>
  //         <button onClick={addTaskHandler}>Add task</button>
  //       </div>
  //     </div>
  //   );
};

export default Body;
