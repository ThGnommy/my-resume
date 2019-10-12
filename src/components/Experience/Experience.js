import React from 'react'
import './Experience.css'
import { Grid } from '@material-ui/core'

const Experience = ({job, year, details}) => {
    return (
        <div className="experience-tab">
            <Grid item>
            <div className="exp-details">
                <p className="job">{job}</p>
                <p>{year}</p>
            </div>
            <div className="exp-description">
                <p>{details}</p>
            </div>
            </Grid>
        </div>
    )
}

export default Experience
