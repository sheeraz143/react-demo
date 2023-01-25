import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import TodoList from "./pages/TodoList";
import TextFunction from "./TextFieldComponent";
import MyFunction from "./pages/SampleTable";
import UserList from "./pages/NewTodo/UserList";
import UserDetail from "./pages/NewTodo/UserDetail";
import Login from "./MFI/LoginPage";
import SignIn from "./MFI/SignIn";
import DashBoard from "./dashboard/DashBoard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="signin" element={<SignIn />}></Route>
        <Route path="dashboard" element={<DashBoard />}></Route>
        <Route path="layout" element={<Layout />} />
        <Route path="textfunction" element={<TextFunction />} />
        <Route path="layout" element={<Layout />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="noPage" element={<NoPage />} />
        <Route path="contact" element={<Contact />} />
        <Route path="home" element={<Home />} />
        <Route path="todo" element={<TodoList />} />
        <Route path="table" element={<MyFunction />} />
        <Route path="userlist" element={<UserList />} />
        <Route path="userdetail" element={<UserDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
