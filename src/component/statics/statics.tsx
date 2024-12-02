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
                    <span className="txt">Advanced Threat Detection Systems: Successfully implemented AI-driven solutions that detect and neutralize cyber threats in real-time.
                        Global Risk Mitigation: Secured critical infrastructures for Fortune 500 companies, reducing cyber attack risks by over 80%.
                        Innovative Encryption Protocols: Pioneered next-gen encryption methods to safeguard sensitive data across industries.
                        Comprehensive Security Training: Trained over 10,000 professionals in cyber defense strategies, strengthening global IT resilience.</span>
                    <button className="btn_spcl">
                        <Link to="/contact">Get Started</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Statics;