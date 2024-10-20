import './work.css'
import Workcard from  '../work_card/work_card';



const data = [
    {
        title: "Basic Computer Security Training",
        image:  "./assets/Effective-sec-item-img5.png",
        description: "This is a description of the first course.",
    },
    {
        title: "Cyber Security Certification Program",
        image:  "./assets/Effective-sec-item-img1.png",
        description: "This is a description of the first course.",
    },
    {
        title: "Network Security Training",
        image:  "./assets/Effective-sec-item-img6.png",
        description: "This is a description of the first course.",
    },
    {
        title: "Ethical Hacking Course",
        image:  "./assets/Effective-sec-item-img7.png",
        description: "This is a description of the first course.",
    },
    {
        title: "Web Application Security Training",
        image:  "./assets/Effective-sec-item-img3.png",
        description: "This is a description of the first course.",
    },
    {
        title: "Cloud Security Workshop",
        image:  "./assets/Effective-sec-item-img8.png",
        description: "This is a description of the first course.",
    }    
]
const work = (() => {
    return (
        <div className="upper">
            <div className="work">
                <div className="headi">
                    <h3>WHAT WE DO</h3>
                </div>
                <div className="work_title">
                    <h5>V-SecurIT Solutions provided top-notch computer & cyber security training</h5>
                </div>
            </div>
            <div className="image_card1">
                {
                    data.map( (datas) => {
                        return <Workcard  {...datas} />
                    })
                }
            </div>
                <div className='btn_block'>
                <button className="butn">Get Started</button>
                </div>

        </div>
    )
})

export default work;
