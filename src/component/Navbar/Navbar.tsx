import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar=(()=>{
const navigate = useNavigate();
const handlenavigate=()=>{
    navigate("/")
    }

    return(
            <header>
               <div className="container">
                  <div className="header-con">
                     <nav className="navbar">
                        <a className="navbar-brand p-0" onClick={handlenavigate}>
                        <img src="./assets/logo-img.png" alt="logo-img" className="img-fluid"/>
                        </a>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                           <ul className="navbar-list">
                              <li className="nav-item active">
                                 <a className="nav-link text-white p-0">Home</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link text-white p-0">About us</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link text-white p-0"> Services </a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link text-white p-0"> Pricing</a>
                              </li>
                              <li className="nav-item">
                                 <a className="nav-link text-white p-0">Team</a>
                              </li>
                              <button className="btn">Contact us</button>
                           </ul>
                        </div>
                     </nav>
                  </div>
               </div>
            </header>
    )
});

export default  Navbar;