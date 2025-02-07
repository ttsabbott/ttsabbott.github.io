import React from 'react'
import './Footer.css'
import mail_icon from '../../assets/mail_icon.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import web3formsAccessKey from '../../web3forms'

const Footer = ({ setMenu }) => {

    const onFooterSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", web3formsAccessKey);

        const object = Object.fromEntries(formData);

        if (object.email === "") {
            alert("Please enter your email");
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
        <div id="footer" className='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <h1>TTSAbbott</h1>
                    <p>Thank you for visiting my site and learning a bit about what I've done and what I could do for your company.</p>
                </div>
                <div className="footer-top-right">
                    <form onSubmit={onFooterSubmit} className="footer-email">
                        <div className="footer-email-input">
                            <img src={mail_icon} alt="" />
                            <input type="email" placeholder='Enter your email' name='email' />
                            <input type="hidden" name="message" value="Subscribe" />
                        </div>
                        <button type="submit" className='footer-subscribe'>Subscribe</button>
                    </form>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <p className="footer-bottom-left">Copyright &copy; 2025 Steve Abbott. All rights reserved.</p>
                <div className="footer-bottom-right">
                    {/* <p>Terms of Service</p> */}
                    {/* <p>Privacy Policy</p> */}
                    <p><AnchorLink className='anchor-link' offset={50} href='#top' onClick={() => setMenu("home")}>Go to top</AnchorLink></p>
                </div>
            </div>
        </div>
    )
}

export default Footer