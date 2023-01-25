// export default function Contact(){
//     return (<h1>Contact</h1>)
// }
import { useEffect, useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./DashBoard/Navbar.css";
import "./MFI/LoginPage";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from "react-responsive-carousel";
import axios from "axios";

//Pages
const Home = () => {
  const [getImages, setImages] = useState([]);
  const [block2, setBlock2] = useState({});
  useEffect(() => {
    axios
      .post("https://admin-stage.myfitindia.com/api/v1/position/home")
      .then(value => {
        //   setBlock2(value.data.data.block_2);
        // console.log("sheeru", setBlock2);

        value.data.data.block_1.content.forEach(content => {
          setImages([...getImages, content.image.desktop.url]);
        });

        // value.data.data.block_2.content.forEach(content => {
        //   setBlock2([...block2, content.image.desktop.url]);
        // });
      });
  }, []);
  // console.log("sheeru", setImages);

  return (
    <div>
      <div style={{ padding: "30px" }}>
        <input
          style={{ height: "30px", width: "450px" }}
          type="text"
          placeholder="search"
        />
      </div>
      <Carousel autoPlay={true} width={"500px"}>
        {getImages.map((item, index) => {
          return (
            <div>
              <img src={item} alt="" />
              <p className="legend">Legend 1</p>
            </div>
          );
        })}
      </Carousel>
      <div>
        <p>{block2.title}</p>
      </div>

      <div>
        <p>{block2.title}</p>
      </div>
      {getImages.map((item, index) => {
        return (
          <div className="shopping_card">
            <img src="" alt="" />
            <p>{item}</p>
            <p>Chocolate Flavour</p>
            <p>
              6999<strike>5999</strike>
            </p>
          </div>
        );
      })}
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  );
};
const Blog = () => {
  return (
    <div>
      <h1>Blog</h1>
    </div>
  );
};
const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
};

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="" className="nav-logo">
            Logo
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/blog"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Blog
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
}
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
