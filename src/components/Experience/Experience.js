import React from 'react'
import { Box, Grid, Typography } from '@material-ui/core'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Experience.css'

const Experience = ({job, year, details}) => {

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
            <Typography>{job}</Typography>
            <Typography>{year}</Typography>
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
