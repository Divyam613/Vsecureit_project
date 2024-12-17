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
                        <h4 className='para_h4'>            Our comprehensive courses and hands-on training programs are designed to equip our students with the skills and knowledge needed to excel in the field of computer and cyber security. At V-SecurIT Solutions,
                        we prioritize the success and security of our clients, and we are dedicated to providing top-notch training and support.</h4>
                    </div>
                </div>
                <Work/>
                <Message/>
                <Enquiry/>
                <CEO />
                <Footer/>
            </div>
            
            
        </div>
    );
};

export default about;