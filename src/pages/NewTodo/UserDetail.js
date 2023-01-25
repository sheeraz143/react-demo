// import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
// import *from '../NewTodo/UserList.css'
import "./UserList.css";

var i = 0;
export default function UserDetail() {
  const [user, setUser] = useState(null);
  const [todoList, setTodoList] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref.current]);
  
  function fetchingUserDetail() {
    axios.get("https://dummyjson.com/users/1").then(value => {
      setUser(value.data);
      fetchingTodos();
    });
  }

  function fetchingTodos() {
    axios.get("https://dummyjson.com/todos/user/1").then(value => {
      console.log("api hittin");
      setTodoList(value.data);
    });
  }
  if (i === 0) {
    fetchingUserDetail();
    i = 1;
  }
function doneMsg(){
  var tempdone = "";
  console.log(todoList)
}
  return (
    <div>
      <ul>
        <li>
          {user == null ? (
            <div>No </div>
          ) : (
            <a href="userdetail">{user.firstName}</a>
          )}
        </li>

        {todoList == null ? (
          <div />
        ) : (
          todoList.todos.map((item, index) => {
            return (
              <div>
                <input
                  ref={ref}
                  key={item.todo}
                  value={item.todo}
                  onChange={event => {
                    item.todo = event.target.value;
                    var temp = { ...todoList };
                    temp.todos[index].todo = event.target.value;
                    console.log(temp);
                    setTodoList(temp);
                  }}
                />

                <button onClick={doneMsg}>Done</button>
                <div style={{ height: 20 }}></div>
              </div>
            );
          })
        )}
      </ul>
    </div>
  );
}
