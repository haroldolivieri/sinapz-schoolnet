import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ResponsiveDrawer from '../components/ResponsiveDrawer'
import SideDrawer from '../components/SideDrawer';
import '../css/MainLayout.css'

class MainLayout extends Component {

  state = {
    navDrawerOpened: false
  };

  toggleDrawer = (open) => () => {
    this.setState({ navDrawerOpened: open });
  };

  render() {
    return (
      <div class="app-frame">

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

          {/* Toolbar with hamburguer menu, logo and search input */}
          <div className="toolbar">
            <div className="only-mobile">
              <IconButton
                onClick={this.toggleDrawer(true)}
                aria-label="Open drawer">
                <MenuIcon />
              </IconButton>
            </div>
          </div>

          {/* Content injected by router */}
          <div>
            {this.props.children}
          </div>

        </main>
      </div>
    );
  }
}

export default MainLayout;