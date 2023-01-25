import "./Mfi.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.sessionStorage.getItem("token") != null) {
      window.sessionStorage.clear();
      navigate("/signin");
    }
  }, []);

  console.log("splsh");

  return (
    <div className="login_page">
      <div className="login_card">
        <div style={{ width: "200px" }}>
          <h1>MY FitIndia</h1>
          <h3>Sign in to youe acoount</h3>
          <div className="card_para">
            <p>View your wish list</p>
            <p>Find and record past </p>
            <p>Track your </p>
          </div>
          <button className="button_in" onClick={() => navigate("/signin")}>
            Sign In
          </button>
          <div style={{ textAlign: "center", padding: "10px 0 10px 0px" }}>
            or
          </div>
          <button className="button_up">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
