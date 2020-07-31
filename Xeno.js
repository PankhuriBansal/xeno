import React,{Component} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles , } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import{BrowserRouter as Router,Switch,Route} from  "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from '@material-ui/icons/Info';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import HelpOutlinedIcon from '@material-ui/icons/HelpOutlined';
import Button from '@material-ui/core/Button';
import { ButtonGroup } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import LiveHelpIcon from '@material-ui/icons/LiveHelp'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {ListItem,ListItemIcon,ListItemText} from  "@material-ui/core";
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import RoomIcon from '@material-ui/icons/Room';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Card from '@material-ui/core/Card';
import {CardHeader} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
function Copyright() {
  return (
  <Typography variant="body2" color="textSecondary"  
align="center">
  {'Copyright © '}
  <Link color="inherit" href="https://material- 
ui.com/">
  Your Website
  </Link>{' '}
  {new Date().getFullYear()}
  {'.'}
  </Typography>
  );
  }

const drawerWidth = 240;
const useStyles =((theme) => ({
root: {
display: 'flex',
},
toolbar: {
paddingRight: 24, // keep right padding when drawer  
},
paper: {
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
},
toolbarIcon: {
display: 'flex',
alignItems: 'center',
justifyContent: 'flex-end',
 flexdirectio:'column',
padding: '0 12px',
...theme.mixins.toolbar,
},
appBar: {
zIndex: theme.zIndex.drawer + 1,
transition: theme.transitions.create(['width',  
'margin'], {
easing: theme.transitions.easing.sharp,
duration: theme.transitions.duration.leavingScreen,
flex: 1,
}),
},
appBarShift: {
marginLeft: drawerWidth,
marginRight: 'auto',
width: `calc(100% - ${drawerWidth}px)`,
transition: theme.transitions.create(['width',  
'margin'], {
easing: theme.transitions.easing.sharp,
duration: theme.transitions.duration.enteringScreen,
}),
},
menuButton: {
marginRight: 36,
color: 'primary',
},
menuButtonHidden: {
display: 'none',
},
title: {
flexGrow: 1,
},
searchIcon: {
  padding: theme.spacing(100, 110),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
notificationIcon: {
  padding: theme.spacing(100, 114),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
settingIcon: {
  padding: theme.spacing(100, 118),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
drawerPaper: {
position: 'relative',
whiteSpace: 'nowrap',
width: drawerWidth,
transition: theme.transitions.create('width', {
easing: theme.transitions.easing.sharp,
duration: theme.transitions.duration.enteringScreen,
}),
},
drawerPaperClose: {
overflowX: 'hidden',
transition: theme.transitions.create('width', {
easing: theme.transitions.easing.sharp,
duration: theme.transitions.duration.leavingScreen,
}),
width: theme.spacing(10),
[theme.breakpoints.up('sm')]: {
width: theme.spacing(9),
},
},
appBarSpacer: theme.mixins.toolbar,
content: {
flexGrow: 1,
height: '100vh',
overflow: 'auto',
},
container: {
paddingTop: theme.spacing(4),
paddingBottom: theme.spacing(4),
},
paper: {
padding: theme.spacing(1),
display: 'flex',
overflow: 'auto',
flex: 1,
flexDirection: 'column',
},
fixedHeight: {
height: 240,
},
formControl: {
  margin: theme.spacing(10),
  minWidth: 420,
  height: 50,
},
form:{
  marginTop: theme.spacing(4,8),
  padding : theme.spacing(2,4,1,4),
  width: 250,
  height: 25,
  marginbottom: 300,
  flex: 1,
  flexgrow: 2,
},
selectEmpty: {
  marginTop: theme.spacing(4),
  minWidth: 220,
},
content: {
  flex: '1 0 auto',
},
horiz :{
  padding: theme.spacing( 0,8),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
},
}));
class Dashboard1 extends Component 
{ constructor()
{
super();
this.state={
open:true
};
}
handleDrawerOpen = () => {
this.setState({open:true})
};
handleDrawerClose = () => {
this.setState({open:false})
};
handleChange = (event) => {
  this.setState({a:event.target.value})
  this.setState({
      ...this.state,
      [event.target.name]: event.target.value
  })
};
render() 
{
const {classes} = this.props;
// [open, setOpen] = state,setState(true);
const fixedHeightPaper = clsx(classes.paper,  
classes.fixedHeight);
return ( 
<div className={classes.root}>
<CssBaseline />
<AppBar position="absolute" className={clsx 
(classes.appBar, this.state.open &&  
classes.appBarShift)}>
<Toolbar className={classes.toolbar}>
<IconButton
edge="start"
color="primary"
aria-label="open drawer"
onClick={this.handleDrawerOpen}
className={clsx(classes.menuButton, this.state.open  
&& classes.menuButtonHidden)}>
  <MenuIcon />
 </IconButton>
        <div className={classes.searchIcon}>
        <SearchIcon/> 
        </div>
        <div className={classes.notificationIcon}>  
<NotificationsIcon/></div>
        <div className={classes.settingIcon} 
><SettingsIcon/></div>
 </Toolbar>
 </AppBar>
 <Drawer
 variant="permanent"
 classes={{
 paper: clsx(classes.drawerPaper, !this.state.open &&  
classes.drawerPaperClose),
}}
open={this.state.open}
>  <div className={classes.toolbarIcon}>
<Button onClick={this.handleDrawerClose}>
<ChevronLeftIcon />
</Button>
</div>
<Divider/>
{/* <Drawer> */}
    <div> 
<List>
                       <ListItem button>   
                       <FormControl variant="filled"  
className={classes.formControl} >
        <InputLabel htmlFor="filled-age-native- 
simple">Age</InputLabel>
        <Select
          native
          onChange={this.handleChange} width="50">
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
        </Select>
        </FormControl>
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>  
                            <LiveHelpIcon/>
                            </ListItemIcon>            
   
                        CLASS CONSTRUCTION
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>  
                            <HomeIcon/>
                            </ListItemIcon>
                          ADD CLASS INFORMATION
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>  
                            <HomeIcon/>
                            </ListItemIcon>            
             
                      ADD DETAILS
                        </ListItem>                    
                       
                        <ListItem button>
                            <ListItemIcon>  
                            <LiveHelpIcon/>
                            </ListItemIcon>
                            QUIZ / ATTENDANCE
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>  
                            <LiveHelpIcon/>
                            </ListItemIcon>
                          INFORMATIONS
                        </ListItem>                    
     
                      </List>
                     </div>
    <Divider />
 </Drawer>
<main className={classes.content}>
<div className={classes.appBarSpacer} />
<div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item container xs={4}>
        <Paper className={classes.paper}>
          <CardHeader
        avatar={
          <Avatar aria-label="recipe" className= 
{classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
        <Typography gutterbottom component="h2"  
variant="h6" color="primary">
            64A
          </Typography>
          <Typography gutterbottom component="h2"  
variant="h6" color="primary">
            64M
          </Typography>
          </Paper>
           </Grid>    
        <Grid item  xs={4}>
          <Paper className={classes.paper}>
          <Typography component="h2" variant="h6"  
color="primary">
            Technologies
            </Typography>
          <div className={classes.horiz} 
><MoreHorizIcon/></div>
          <Typography component="h2" variant="h6"  
color="primary">
            9.3M
          </Typography>
        <center>  <List>
            <li>.HTML</li>
            <li>.CSS</li>
            <li>.Angular</li>
          </List> </center>
          </Paper>
        </Grid>
        <Grid item container xs={4}>
          <Paper className={classes.paper}>Total  
Orders
          <MoreHorizIcon  className={classes.submit} 
></MoreHorizIcon>
          <Typography component="h2" variant="h6"  
color="primary">
            17M
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            Announcements
          <p>Incredibly positve reviews</p>
         <p>To start</p> 
         <div className={classes.root}>
      <Button variant="contained">Default</Button>
      <Button variant="contained" marginRight="20%"  
>Default</Button>     
      </div>
          </Paper>
        </Grid>
        <Grid item container xs={4}>
          <Paper className={classes.paper}>Projects
          <p>First MileStone Achievement</p>
          <p> To start </p></Paper>
        </Grid>
        <Grid item container xs={4}>
          <Paper className={classes.paper}>Today's  
Schedule
          <p>UI/UX Updates</p>
           <p>11:45AM-12:00PM</p>
            <p> <RoomIcon /> Mantthan Road <Button  
variant="contained" marginRight="2">Default</Button>  
</p> 
          </Paper>
        </Grid>
        <Grid item container xs={4}>
          <Paper className={classes.paper}>Top  
Products
        <center> <ButtonGroup variant="contained"  
color="primary" aria-label="contained primary button  
group" >
  <Button>
 <p> <RoomIcon /></p>
    One</Button>
  <Button>Two</Button>
  <Button>Three</Button>
</ButtonGroup></center>
<List>
<li>HTML 5         %79</li>
<li>WordPress</li>
<li>eCommerce </li>
<li>UI/UX Design</li>
<li>Forbio Themes</li>
</List>
          </Paper>
        </Grid>
        <Grid item container xs={8}>
          <Paper className={classes.paper}>Sales  
Statistics</Paper>
        </Grid>
      </Grid>
    </div>
</main>
</div>
);
}
}
export default withStyles(useStyles)(Dashboard1);
