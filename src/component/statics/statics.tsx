import { Link } from "react-router-dom";
import ImageCard2 from "../image_card_statics/card2";
import "./statics.css"
const data = [
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
function Statics() {
    return (
        <div className="statics upper2">
            <div className="statics_inner">
                <div className="statics_left child_div ">
                    {
                        data.map((item, index) => {
                            return (
                                <ImageCard2 
                                    image={item.image}
                                    title={item.title}
                                    description={item.description} />
                            );
                        })
                    }
                </div>
                <div className="statics_right child_div" >
                    <h5 className="headi">STATISTICS</h5>
                    <h1 className="titl">Our Large Acheivements in Cyber Security</h1>
                    <span className="txt">Repudiandae irure dolor in reprehenderit in voluptate velit esse dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum incidunt ut labore et dolore magnam.</span>
                    <button className="btn_spcl">
                        <Link to="/contact">Get Started</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Statics;