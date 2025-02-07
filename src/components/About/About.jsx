import React from 'react'
import './About.css'
import theme_pattern from '../../assets/react.svg'
import profile_img from '../../assets/sa.jpeg'

const About = () => {
    return (
        <div id="about" className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
                </div>
                <div className='about-right'>
                    <div className="about-para">
                        <p>
                            I am a seasoned Lead Portal Developer with 20+ years of experience designing and implementing web-based business solutions using open-source technologies.
                            My expertise lies in Java, Spring MVC, React, and database development, along with a strong background in Agile and Waterfall methodologies.
                            Throughout my career at Office Depot, I have led development teams, modernized legacy systems, and built mission-critical applications like the Vendor Portal, which streamlined business operations and generated significant cost savings.
                            My technical skills span multiple platforms, including WebSphere, Tomcat, and Oracle WebLogic, and I have successfully managed large-scale projects that integrate and optimize enterprise systems.
                        </p>
                        <p>
                            Beyond software development, I excel in strategic problem-solving and cost-reduction initiatives.
                            I have led teams in migrating legacy COBOL and CICS systems to Java, negotiated contracts to reduce licensing costs, and championed open-source adoption to enhance efficiency.
                            With a Master’s in Accounting from Florida International University and a Bachelor's in Business Administration from the University of Florida, I bring both technical expertise and a deep understanding of business processes.
                            My ability to innovate, lead cross-functional teams, and drive digital transformation makes me a strong asset in any technology-driven organization.
                        </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Java</p><hr style={{ width: "90%" }} /></div>
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skill"><p>JavaScript</p><hr style={{ width: "80%" }} /></div>
                        <div className="about-skill"><p>jQuery/jQWidgets</p><hr style={{ width: "90%" }} /></div>
                        <div className="about-skill"><p>Next.js</p><hr style={{ width: "40%" }} /></div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>30+</h1>
                    <p>Years of experience</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>200+</h1>
                    <p>Projects completed</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>50+</h1>
                    <p>Happy clients</p>
                </div>
            </div>
        </div>
    )
}

export default About