import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

const uitheme = createMuiTheme({
  palette: {
    primary: { main: '#3C4754' },
    secondary: { main: '#4986DD' },
    background: '#FAF8F8'
  },
  typography: {
    useNextVariants: true,
    fontSize: '11',
    fontFamily: 'Montserrat, sans-serif'
  }
});

const styles = theme => ({
  appFrame: {
    display: 'flex',
    width: '100%'
  },
  drawerPaper: {
    position: 'relative',
    zIndex: '9999',
    height: '100vh',
    width: '80vw',
    backgroundColor: uitheme.palette.primary.main,
    [theme.breakpoints.up('sm')]: {
      width: '30vw'
    },
  },
  hiddenForMobile: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'flex'
    }
  },
  onlyMobile: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },
  content: {
    backgroundColor: uitheme.palette.background,
    height: '100vh',
    width: '100vw',
    textColor: uitheme.palette.primary.dark,
    paddingLeft: '1em',
    paddingRight: '1em',
    [theme.breakpoints.up('sm')]: {
      width: '70vw'
    }
  },
  toolbar: {
    alignItems: 'center',
    display: 'flex',
    height: '5em'
  }
})

class App extends Component {

  state = {
    navDrawerOpened: false
  };

  toggleDrawer = (open) => () => {
    this.setState({ navDrawerOpened: open });
  };

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.drawerPaper} >
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <MuiThemeProvider theme={uitheme}>

        <div className={classes.appFrame}>

          <Drawer open={this.state.navDrawerOpened} onClose={this.toggleDrawer(false)}>
            <div
              onClick={this.toggleDrawer(false)}
              onKeyDown={this.toggleDrawer(false)}
            >
              <div className={classes.onlyMobile}>
                {sideList}
              </div>
            </div>
          </Drawer>

          <div className={classes.hiddenForMobile}>
            {sideList}
          </div>

          <main className={classes.content}>

            <div className={classes.toolbar}>
              <div className={classes.onlyMobile}>
                <IconButton
                  onClick={this.toggleDrawer(true)}
                  aria-label="Open drawer">
                  <MenuIcon />
                </IconButton>
              </div>
            </div>

            <div>
              {/* Changing depending on route */}
              <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
                facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
                tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
                consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus
                sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo
                viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam
                ultrices sagittis orci a.
          </Typography>
            </div>

          </main>
        </div>
      </MuiThemeProvider >
    );
  }
}

export default withStyles(styles)(App);
