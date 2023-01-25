import { useState } from "react";

export default function TodoList() {
  const [newTodoText, setTodoText] = useState("");
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Do the dishes",
    },
    {
      id: 2,
      title: "Take out the trash",
      purchase: true,
    },
    {
      id: 3,
      title: "Mow the lawn",
    },
  ]);
  function addItem() {
    var newItem = [...items];
    newItem.push({
      id: newItem.length + 1,
      title: newTodoText,
    });
    setItems(newItem);
    setTodoText("");
  }
  function removeRow(index){
        var tempRemove = [...items]
        tempRemove.splice(index,1);
        setItems(tempRemove);
  }
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
        <h1>Add to do</h1>
        <input
          value={newTodoText}
          onChange={event => {
            setTodoText(event.target.value);
          }}
          placeholder="E.g Feed the cat"
        />
        <button
          onClick={() => {
            addItem();
          }}
        >
          Add
        </button>
      </div>
      <ul>
        {items.map((item, index) => {
          return (
            <li>
              {item.title} <button onClick={()=>{removeRow(index)}}>Remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
