import React from 'react'
import './Experience.css'

const Experience = (props) => {
    return (
        <div className="experience-tab">
            <div className="exp-details">
                <p>{props.job}</p>
                <p>{props.year}</p>
            </div>
            <div className="exp-description">
                <p>{props.details}</p>
            </div>
        </div>
    )
}

export default Experience
