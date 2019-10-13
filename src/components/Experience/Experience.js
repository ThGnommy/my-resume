import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Experience.css'

const Experience = ({job, where, year, details}) => {

    return (
        <div className="experience-tab">
        <Grid>
            <Box boxShadow={5}>

            <ExpansionPanel>
            <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
            <Typography className="job">{job}</Typography>
            <Typography className="where">{where}</Typography>
            <Typography className="year">{year}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                {details}
                </Typography>
            </ExpansionPanelDetails>
            </ExpansionPanel>
            </Box>
        </Grid>
        </div>
    )
}

export default Experience
