import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './SideTab.css'

function SideTab(props) {
    const { children, value, index } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  SideTab.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  

  
  export default function SimpleTabs() {
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <div className="sidebar">
        <AppBar position="static">
          <Tabs indicatorColor="#fff" variant="fullWidth" value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Contacts" {...a11yProps(0)} />
            <Tab label="Game Audio" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SideTab value={value} index={0}>
            <Typography><a href="mailto: th.brandoli@gmail.com">EMAIL</a></Typography>
            <Typography><a href="https://github.com/ThGnommy" rel="noopener noreferrer" target="_blank">GITHUB</a></Typography>
            <Typography><a href="https://www.linkedin.com/in/thbrandoli/" rel="noopener noreferrer" target="_blank">LINKEDIN</a></Typography>
        </SideTab>
        <SideTab value={value} index={1}>
            <Typography><a href="https://gnommysound.netlify.com/" rel="noopener noreferrer" target="_blank">GAME AUDIO PORTFOLIO</a></Typography>
        </SideTab>
      </div>
    );
}