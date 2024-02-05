import React from "react";
import ContactUsBackgroungImg from "../../assets/ContactUs/ContactUs.svg";
import "./ContactUsStyles/ContactUs.css";

function ContactUs(props) {
  return (
    <section>
      <div className="ContactUs">
        <img src={ContactUsBackgroungImg} alt="" className="contactUs" />
        <div className="ContactUsTopic">
          <h1 id="contactUsTopic">Contact Us</h1>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
