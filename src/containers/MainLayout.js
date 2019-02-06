import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { ResponsiveDrawer, SideDrawer } from '../components'
import { loadInitalData } from '../menu/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import '../css/MainLayout.css'

export class MainLayout extends Component {

  constructor(props) {
    super(props);

    this.props.loadInitalData()
  }

  state = {
    navDrawerOpened: false,
    selectedItem: 'dashboard'
  };

  toggleDrawer = (open) => () => {
    this.setState({ navDrawerOpened: open });
  };

  render() {
    return (
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

const mapDispatchToProps = dispatch => bindActionCreators({ loadInitalData }, dispatch)
export default connect(null, mapDispatchToProps)(MainLayout)
