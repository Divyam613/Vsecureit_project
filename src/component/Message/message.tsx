import { Link } from "react-router-dom";
import "./message.css"
function message() {
    return (
        <div>
            <div className="message_cyber">
                <h1 className="message_title">Ready To Get Started? We're Here To Help.</h1>
                <button className="btn_spcl">
                    <Link to="/" className="under_line">Let's Talk</Link>
                </button>
            </div>
        </div>
    )
}

export default message;