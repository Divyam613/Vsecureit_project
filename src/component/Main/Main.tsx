// Header.js
import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Main.css';
import Partners from '../partners_constri';
import About from '../About_Us/about';
import Work from '../our_work/work';
import ServicesSection from '../services/service';
import Statics from '../statics/statics';
import Workshop from '../Workshops/Workshops';
import Enquiry from '../Enquiry/enquiry';
import CEO from '../CEO/CEO';
import Message from '../Message/message';
import Footer from '../footer/footer';
import { useNavigate } from 'react-router-dom';

const Main = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div className="up_layer">
      <div className="main_banner">
        <Navbar />
        <header className='HERO'>
            <div className=' hero-left'>
              <span className='top-para para'>
                Elevate Your Cyber Defenses
              </span>
              <span className='para'>
                Master the art of digital protection with our top-tier computer and cyber security training.
              </span>
              <div className='buttons'>
                <button className='btn1' onClick={() => navigate('/about')}>
                  Get started
                </button>
                <button className='btn2' onClick={() => navigate('/contact')}>
                  Contact Us
                </button>
              </div>
            </div>
            <img src="./assets/banner-right-img.png" alt="banner" className='hero_comp'/>
        </header>
      </div>
      <Partners />
      <About/>
      </div>
      <Work/>
      <ServicesSection/>
      <Statics/>
      <Workshop/>
      <Message/>
      <Enquiry/>
      <CEO/>
      <Footer/>   
    </div>
  );
};

export default Main;