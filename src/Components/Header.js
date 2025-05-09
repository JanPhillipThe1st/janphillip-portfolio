import "../App.css";
import { useNavigate } from "react-router-dom";

function Header(){
    const navigate = useNavigate();
    return(
        <div className="App">
          <header className="App-header">
            <div className='navbar'>
              <div className='nav-item'>
                <button onClick={()=>{navigate("/")}}> 
                Jan Phillip Juntado
                </button>
              </div>
              <div className='nav-item'>
                <button onClick={()=>{navigate("/about_me")}}> About me</button>
                <button onClick={()=>{navigate("/my_projects")}}> My projects</button>
                <button onClick={()=>{navigate("/contact")}}> Contact</button>
                <button onClick={()=>{navigate("/instructables")}}> Instructables</button>
              </div>
            </div>
            <div id='content'>
              
            </div>
          </header>
        </div>);
}
export default Header;