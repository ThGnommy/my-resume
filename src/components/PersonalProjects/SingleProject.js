import React, {useState} from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Code from '@material-ui/icons/Code';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/core/styles';

export const SingleProject = ({title, text, link}) => {

    const useStyles = makeStyles((theme) => ({
        root: {
        
            width: '100%',
            maxWidth: 360,
        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        breakWord: {
          wordBreak: "break-word"
        }
        
        }));

    const classes = useStyles();
    const [open, setOpen] = useState(false)

      const handleClick = () => {
          setOpen(prevState => !prevState)
      }



    return (
    <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
    >
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
          <Code style={{color: 'white'}} />
          </ListItemIcon>
          <ListItemText primary={title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText className={classes.breakWord} primary={text} secondary={link} />
        </ListItem>
          </List>
        </Collapse>
      </List>
    )
}
