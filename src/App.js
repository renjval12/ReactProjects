import React, { useState, useRef, useEffect } from "react";

export default function App() {

  let addItemRef = useRef()

  useEffect(() => {
    addItemRef.current.focus()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    let formData = {
      addItem: addItemRef.current.value
    }
    setTodo(todo, formData.addItem)
  }

  const addItem ()

  const [todo, setTodo] = useState([

    {
      listItem: 'Pick up dry cleaning',
    },
    {
      listItem: 'Do dishes',
    },
    {
      listItem: 'Vacuum',
    },
    {
      listItem: 'Buy groceries',
    },
  ])


  return (
    <div id="App">
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item:</label>
        <input
          id="addItem"
          ref={addItemRef}
          type="text"
        />
        <button>Add Todo</button>
      </form>
      {todo.map((list, index) =>
        <ul key={index}>
          <li>{list.listItem}</li>
          <input id="" type="checkbox" />
          {/* <button>Do Task</button> */}
        </ul>
      )}
    </div>
  );
}