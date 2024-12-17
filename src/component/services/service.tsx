import React from 'react';
import "./services.css";

const ServicesSection = () => {
  return (
    <section className="services">

      <div className="service_container parent">
        <div className="left_side div_root">
          <h2 className='headi'>Reliable IT & Cyber Security</h2>
          <h1 className='titl'>Cyber Security Services With Top IT Experts</h1>
          <span className="txt">
            Welcome to V-SecurIT Solutions, the leading computer and cyber security training provider in Delhi, Bharat. With a team
            of experienced professionals, we are committed to delivering high-quality training and education to help individuals and
            organizations stay ahead of cyber threats.
          </span>
          <span className='txt'>
            Our comprehensive courses and hands-on training programs are designed to equip our students with the skills and knowledge needed to excel in the field of computer and cyber security. At V-SecurIT Solutions,
            we prioritize the success and security of our clients, and we are dedicated to providing top-notch training and support.
          </span>


          <div className="row service-skill-sttaf-con">
            <div className="col-lg-4 col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="circle-wrap firstPercentage">
                <div className="circle">
                  <div className="mask full">
                    <div className="fill"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill"></div>
                  </div>
                  <div className="inside-circle">
                    <div className="service-skill-sttaf-item-con">
                      <div className="service-skill-sttaf-item-title service-skill-sttaf-item2-con text-center d-flex align-items-center justify-content-center">
                        <h4 className="d-table-cell align-middle mb-0 text-center count">85</h4>
                        <span className="text-white static-txt2">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-skill-sttaf-item-heading">
                <h3 className="mb-0 text-white">Quality Services</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="circle-wrap secondPercentage">
                <div className="circle">
                  <div className="mask full">
                    <div className="fill"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill"></div>
                  </div>
                  <div className="inside-circle">
                    <div className="service-skill-sttaf-item-con">
                      <div className="service-skill-sttaf-item-title service-skill-sttaf-item2-con text-center d-flex align-items-center justify-content-center">
                        <h4 className=" mb-0 text-center count">78</h4>
                        <span className="text-white static-txt2">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-skill-sttaf-item-heading">
                <h3 className="mb-0 text-white">Skilled Staff</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-12">
              <div className="circle-wrap thirdPercentage">
                <div className="circle">
                  <div className="mask full">
                    <div className="fill"></div>
                  </div>
                  <div className="mask half">
                    <div className="fill"></div>
                  </div>
                  <div className="inside-circle">
                    <div className="service-skill-sttaf-item-con">
                      <div className="service-skill-sttaf-item-title service-skill-sttaf-item3-con text-center d-flex align-items-center justify-content-center">
                        <h4 className="mb-0 text-center count">64</h4>
                        <span className="text-white static-txt2">%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="service-skill-sttaf-item-heading">
                <h3 className="mb-0 text-white">Support Team</h3>
              </div>
            </div>
          </div>
        </div>
        <div className='right_background div_root'>
          <div className="right_side">
            <img src="./assets/service-box-img.png" alt="service-box" />
            <h3 className='heading_bg_upper'>Creative Security Solutions</h3>
            <h3 className='title_bg_upper'>Quos dolores et quas molestias excepturi sint occaecati cuiditate non provident.</h3>
            <a href='google.com'>Readmore</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default ServicesSection;