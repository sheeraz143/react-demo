import {
  BrowserRouter as Router,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import "./Navbar.css";
import "../MFI/LoginPage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import NavBar from "./utils/navbar";
import Home from "./Home";
import { useNavigate } from "react-router-dom";
import Collapsible from "../expandlist/ExpandList";
import Blog from "./Blog";
import SimpleSlider from "./SimpleSlider";

//Pages

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        style={{ display: "flex" }}
        onClick={() => {
          navigate(`1`);
        }}
      >
        <h1>sheeru0 </h1>
      </div>
      <Outlet />
    </div>
  );
};

export default function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />}>
              <Route path=":id" element={<Blog />} />
            </Route>
            <Route path="expand" element={<Collapsible />} />
            <Route path="slider" element={<SimpleSlider/>} />

            {/* <Route path="/" element={<Home />}>
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path=":id" element={<Blog />} />
            </Route> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}
