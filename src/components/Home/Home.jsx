import React from 'react'
import './Home.css'
import profile_img from '../../assets/sa.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import pdf_download from '../../assets/Steve_Abbott_Resume.pdf'

const Home = () => {
    return (
        <div id="home" className='home'>
            <img src={profile_img} alt="" />
            <h1>I'm <span>Steve Abbott</span>, a full-stack developer.</h1>
            <p>Providing top-tier remote development for 17+ years from Tucson, AZ.</p>
            <div className="home-action">
                <div className="home-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="home-resume"><a href={pdf_download}>My Resume</a></div>
            </div>
        </div>
    )
}

export default Home