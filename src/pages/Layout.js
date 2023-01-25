
import { useNavigate } from "react-router-dom";


export default function Layout(){
  const navigate = useNavigate();

    return (
      <div>
        <h1>Layouts</h1>

        <button onClick={()=>{
            window.sessionStorage.clear();
             navigate("/");

        }}>Logout</button>
      </div>
    );
}
