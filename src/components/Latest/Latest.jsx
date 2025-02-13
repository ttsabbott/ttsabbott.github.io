import React from 'react'
import './Latest.css'
import theme_pattern from '../../assets/react.svg'
import latest_data from '../../data/latest_data'
// import arrow_icon from '../../assets/arrow_icon.svg'

const Latest = () => {
    return (
        <div id="latest" className='latest'>
            <div className="latest-title">
                <h1>My Latest Work</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="latest-container">
                {latest_data.map((work, index) => {
                    return (
                        <div key={index} className='latest-work'>
                            <h2>{work.w_name}</h2>
                            <p>{work.w_desc}</p>
                            <span>Tech used: {work.w_tech}</span><br />
                            <a href={work.w_href} target='_blank' rel="noreferrer">
                            <img key={index} src={work.w_img} alt="" />
                            </a>
                        </div>
                    )
                })}
            </div>
            {/* <div className="latest-showmore">
                <p>Show More</p>
                <img src={arrow_icon} alt="" />
            </div> */}
        </div>
    )
}

export default Latest