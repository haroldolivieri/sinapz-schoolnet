import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ResponsiveDrawer from '../components/ResponsiveDrawer'
import SideDrawer from '../components/SideDrawer';
import '../css/App.css'

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const uitheme = createMuiTheme({
  palette: {
    secondary: { main: '#4986DD' }
  },
  typography: {
    useNextVariants: true,
    fontSize: '11',
    fontFamily: 'Montserrat, sans-serif'
  }
});

class App extends Component {

  state = {
    navDrawerOpened: false
  };

  toggleDrawer = (open) => () => {
    this.setState({ navDrawerOpened: open });
  };

  render() {

    return (
      <MuiThemeProvider theme={uitheme}>

        <div className="app-frame">

          <div className="only-mobile">
            <ResponsiveDrawer
              opened={this.state.navDrawerOpened}
              onClose={this.toggleDrawer}
            />
          </div>

          <div className="hidden-for-mobile">
            <SideDrawer />
          </div>

          <main className="main-content">

            <div className="toolbar">
              <div className="only-mobile">
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
                consequat mauris.
              </Typography>
            </div>

          </main>
        </div>
      </MuiThemeProvider >
    );
  }
}

export default App;
