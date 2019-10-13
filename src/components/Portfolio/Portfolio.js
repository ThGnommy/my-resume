import React from 'react'
import './Portfolio.css'
import { Box, Grid, Typography } from '@material-ui/core'


const Portfolio = () => {
    return (
        <div className="portfolio-tab">
            <Grid>
                <Box boxShadow={5}>
                    <Typography><a href="https://gnommysound.netlify.com/" rel="noopener noreferrer" target="_blank">GAME AUDIO PORTFOLIO</a></Typography>
                </Box>
            </Grid>
        </div>
    )
}

export default Portfolio
