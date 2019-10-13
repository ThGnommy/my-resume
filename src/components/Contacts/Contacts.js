import React from 'react'
import './Contacts.css'
import { Box, Grid, Typography } from '@material-ui/core'


const Contacts = () => {
    return (
        <Grid>
        <Box boxShadow={5}>
        <div className="contact-tab">
            <Typography><a href="mailto: th.brandoli@gmail.com">EMAIL</a></Typography>
            <Typography><a href="https://github.com/ThGnommy" rel="noopener noreferrer" target="_blank">GITHUB</a></Typography>
            <Typography><a href="https://www.linkedin.com/in/thbrandoli/" rel="noopener noreferrer" target="_blank">LINKEDIN</a></Typography>
        </div>
        </Box>
        </Grid>

    )
}



export default Contacts
