import React from 'react'
import { Box, Typography } from '@material-ui/core'
import {MATCH_GAME, WEATHER_APP, BOOK_APP, PORTFOLIO_SAMPLE, LOL_BOT, REACT_TO_DO, SOCIAL_MEDIA_DASHBOARD} from './projects'
import {SingleProject} from './SingleProject'
import './PersonalProjects.css'

export const PersonalProjects = () => {

    return (
  <div>
    <Box boxShadow={3} className="project-tab" p={3} mt={3}>

    <Typography variant="h6">Personal Project</Typography>
    <SingleProject title={WEATHER_APP.title} text={WEATHER_APP.text} link={WEATHER_APP.link} />
    <SingleProject title={BOOK_APP.title} text={BOOK_APP.text} link={BOOK_APP.link} />
    <SingleProject title={PORTFOLIO_SAMPLE.title} text={PORTFOLIO_SAMPLE.text} link={PORTFOLIO_SAMPLE.link} />
    <SingleProject title={REACT_TO_DO.title} text={REACT_TO_DO.text} link={REACT_TO_DO.link} />
    <SingleProject title={LOL_BOT.title} text={LOL_BOT.text} link={LOL_BOT.link} />
    <SingleProject title={MATCH_GAME.title} text={MATCH_GAME.text} link={MATCH_GAME.link} />
    <SingleProject title={SOCIAL_MEDIA_DASHBOARD.title} text={SOCIAL_MEDIA_DASHBOARD.text} link={SOCIAL_MEDIA_DASHBOARD.link} />
    
    </Box>
  </div>
    )
}
