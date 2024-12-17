
import { useNavigate, Link } from "react-router-dom";
import "./navbar.css";
import { useState, useEffect } from "react";

const Navbar = (() => {
   const [isMobile, setIsMobile] = useState(false);
   const navigate = useNavigate();
   const handlenavigate = () => {
      navigate("/")
   }
   const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the width as per your mobile breakpoint
   }

   useEffect(() => {
      handleResize(); // Check on mount
      window.addEventListener('resize', handleResize); // Add event listener for resize

      return () => {
         window.removeEventListener('resize', handleResize); // Cleanup on unmount
      };
   }, []);

   return (
      <header>
         <div className="container">
            <div className="header-con">
               <nav className="navbar">
                  <a className="navbar-brand p-0" onClick={handlenavigate}>
                     <img src="./assets/Vsec_logo_white.png" alt="logo-img" className="img-fluid" />
                  </a>
                  <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                     {isMobile ? (
                        <a className="mobileview" onClick={() => setIsMobile(!isMobile)}>
                           <img src="./assets/menu.svg" alt="" />
                        </a>
                     ):(
                        <ul className="navbar-list">
                        <li className="nav-item active">
                           <Link to="/" className="nav-link text-white p-0" > Home </Link>
                        </li>
                        <li className="nav-item">
                           <Link to="/about" className="nav-link text-white p-0" > About us </Link>
                        </li>
                        <li className="nav-item">
                           <Link to="/services" className="nav-link text-white p-0" > Services </Link>
                           {/* <button className="nav-link text-white p-0" onClick={()=> navigate('/services')}> Services </button> */}
                        </li>
                        <li className="nav-item">
                           <Link to="/team" className="nav-link text-white p-0" > Team </Link>
                        </li>
                        {/* <button className="btn"> Contact us</button> */}
                        <button className="btn"  >Contact us</button>
                     </ul>
                     )}
                     
                  </div>
               </nav>
            </div>
         </div>
      </header>
   )
});

export default Navbar;