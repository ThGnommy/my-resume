import React from 'react'
import './Experience.css'

const Experience = ({job, year, details}) => {
    return (
        <div className="experience-tab">
            <div className="exp-details">
                <p className="job">{job}</p>
                <p>{year}</p>
            </div>
            <div className="exp-description">
                <p>{details}</p>
            </div>
        </div>
    )
}

export default Experience
