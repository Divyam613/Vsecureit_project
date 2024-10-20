// Header.js

import Navbar from '../../component/Navbar/Navbar';
import './service.css';
import CEO from '../../component/CEO/CEO';
import Work from '../../component/our_work/work';
import Message from '../../component/Message/message';
import Enquiry from '../../component/Enquiry/enquiry';
import Footer from '../../component/footer/footer';



const data_statistics = [
    {
        image: "./assets/Cyber-Security-left-card-img1.png",
        title: "3329",
        description: "Global Projects"
    },
    {
        image: "./assets/Cyber-Security-left-card-img2.png",
        title: "2219",
        description: "client Projects"
    },
    {
        image: "./assets/Cyber-Security-left-card-img3.png",
        title: "1247",
        description: "service guarantee"
    },
    {
        image: "./assets/Cyber-Security-left-card-img4.png",
        title: "50+",
        description: "access team"
    }
]

const about = () => {

    return (
        <div>
            <div className="up_layer">
                <div className="main_banner">
                    <Navbar />
                    <div className='about_para'>        
                        <h1 className='para_h1 '>Services</h1>
                        <h4 className='para_h4'>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                    </div>
                </div>
                <Work/>
                <Message/>
                <Enquiry/>
                <Footer/>
            </div>
            
            <CEO />
        </div>
    );
};

export default about;