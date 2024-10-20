// Header.js

import Navbar from '../../component/Navbar/Navbar';
import './about.css';
import Aboutus from '../../component/About_Us/about';
import CEO from '../../component/CEO/CEO';
import Workcard from '../../component/work_card/work_card';
import ImageCard2 from '../../component/image_card_statics/card2';



const data_work = [
    {
        title: "Basic Computer Security Training",
        image: "./assets/Effective-sec-item-img5.png",
        description: "This is a description of the first course.",
    },
    {
        title: "Cyber Security Certification Program",
        image: "./assets/Effective-sec-item-img1.png",
        description: "This is a description of the first course.",
    },
    {
        title: "Network Security Training",
        image: "./assets/Effective-sec-item-img6.png",
        description: "This is a description of the first course.",
    },
    {
        title: "Ethical Hacking Course",
        image: "./assets/Effective-sec-item-img7.png",
        description: "This is a description of the first course.",
    },
    {
        title: "Web Application Security Training",
        image: "./assets/Effective-sec-item-img3.png",
        description: "This is a description of the first course.",
    },
    {
        title: "Cloud Security Workshop",
        image: "./assets/Effective-sec-item-img8.png",
        description: "This is a description of the first course.",
    }
]
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
                        <h1 className='para_h1 '>About us</h1>
                        <h4 className='para_h4'>Dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
                    </div>
                    <div className="image_card1">
                        {
                            data_work.map((datas) => {
                                return <Workcard  {...datas} />
                            })
                        }
                    </div>
                </div>
                <Aboutus />
            </div>
            <div className='statistics_card'>
                <div className=" static_design">
                    <div className="statics_left child_div ">
                        {
                            data_statistics.map((item, index) => {
                                return (
                                    <ImageCard2
                                        image={item.image}
                                        title={item.title}
                                        description={item.description} />
                                );
                            })
                        }
                    </div>
                </div>
                <div className='btn_block'>
                <button className="butn">Get Started</button>
                </div>
            </div>

            <CEO />
        </div>
    );
};

export default about;