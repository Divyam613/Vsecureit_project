import "./footer.css"

function footer() {
    return (
        <div className="footer_hero">
            <div className="footer_hero_inner">
                <div className="footer">
                    <div className="footer_logo">
                        <img src="./assets/logo-img.png" alt="logo" />
                    </div>
                    <p className="txt footer_desc">Welcome to V-SecurIT Solutions, the leading computer and cyber security training provider in Delhi, Bharat. With a team of experienced professionals, we are committed to delivering high-quality training and education to help individuals and organizations stay ahead of cyber threats.
                    </p>
                </div>
                <div className="footer">
                    <div className="footer_title">
                        <h3>About Us</h3>
                    </div>
                    <div className="">
                        <ul className="footer_info">
                            <li>
                                <a href="https://html.designingmedia.com/Cyber-Chip/about.html" className="txt footer_anc">
                                    About us
                                </a>
                            </li>
                            <li>
                                <a href="https://html.designingmedia.com/Cyber-Chip/services.html" className="txt footer_anc">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="https://html.designingmedia.com/Cyber-Chip/pricing.html" className="txt footer_anc">
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a href="https://html.designingmedia.com/Cyber-Chip/team.html" className="txt footer_anc">
                                    Team
                                </a>
                            </li>
                            <li className="">
                                <a href="https://html.designingmedia.com/Cyber-Chip/contact.html" className="txt footer_anc">
                                    Contact us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer">
                    <div className="add">
                        <div className="footer_title ">
                            <h3>Our Services</h3>
                        </div>
                        <div className="">
                            <ul className="footer_ul">
                                <li className="txt">121 King Street Melbourne,
                                    3000, Australia
                                </li>
                                <li>
                                    <a href="mailto:info@Cyberchip.com" className="txt">
                                        info@Cyberchip.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+123456789" className="txt">+1 23 45 6789</a>
                                </li>
                                <li className=""><a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a></li>
                                <li className=""><a href="https://twitter.com/?lang=en"><i className="fab fa-twitter"></i></a></li>
                                <li className=""><a href="https://www.instagram.com/accounts/login/"><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="footer">
                    <div className="footer_title">
                        <h3 className="Newsletter-title">Newsletter</h3>
                    </div>
                    <div className="weight-footer-item-form">
                        <div className="footer_input">
                            <input className="inp_ftr txt" type="email" placeholder="Enter your email" >
                            </input>
                            <button className="border-0" value="">
                                <img src="./assets/submit-img.png" alt="submit-img" />
                            </button>
                        </div>
                        <div className="form-group">
                            <input className="checkbox" type="checkbox" id="html" />
                            <label className="checkbox-details txt">I Agree to the Terms</label>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="hori_line" />
            <div className="ftr_btm txt">
                Copyright Cyberchip © 2022. All Rights Reserved.
            </div>
        </div>
    )
}

export default footer;