import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/react.svg'
// import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
// import call_icon from '../../assets/call_icon.svg'
import web3formsAccessKey from '../../web3forms'

const Contact = () => {

    const onContactSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", web3formsAccessKey);

        const object = Object.fromEntries(formData);

        if (object.name === "" || object.email === "" || object.message === "") {
            alert("Please fill in the required fields");
            return;
        }

        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            alert(res.message);
        }
    };

    return (
        <div id="contact" className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently available to take on new projects, so feel free to send me a message about anything you want me to work on.</p>
                    <div className="contact-details">
                        {/* <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>*****@gmail.com</p>
                        </div> */}
                        {/* <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+1 520-###-####</p>
                        </div> */}
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Tucson, AZ, United States</p>
                        </div>
                    </div>
                </div>
                <form onSubmit={onContactSubmit} className="contact-right">
                    <h2 className="contact-required">* All fields required</h2>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="email">Message</label>
                    <textarea placeholder='Enter your message' name='message' rows="8"></textarea>
                    <input type="hidden" name="subject" value="Contact message from portfolio website" />
                    {/* <input type="hidden" name="redirect" value="https://ttsabbott.com/thanks.html" /> */}
                    <button type="submit" className='contact-submit'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact