import "./enquiry.css"

function enquiry(){
    return(
        <div className="enquiry_head">
            <h5 className="headi">GET IN TOUCH</h5>
            <h2 className="titl">Send us a Message</h2>
            <div className="enquiry_input">
               <input className="input_en" type="Name" placeholder="Name" />
               <input className="input_en" type="email" placeholder="Email"/>
               <input className="input_en" type="Phone" placeholder="phone" />
            </div>
            <div className="enquiry_input2">
                <input className="input_en2"  type="Message"></input>
            </div>
        </div>
    )}

export default enquiry;