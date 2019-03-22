import React, { Component } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import { ResponsiveDrawer, SideDrawer } from '../components'
import { loadInitalData } from '../menu/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SearchInput from '../containers/SearchInput'
import '../css/MainLayout.css'

export class MainLayout extends Component {
    constructor(props) {
        super(props)

        this.props.loadInitalData()
    }

    state = {
        navDrawerOpened: false,
        selectedItem: 'dashboard'
    }

    toggleDrawer = () => {
        this.setState(state => ({ navDrawerOpened: !state.navDrawerOpened }))
    }

    renderToolbar() {
        return (
            <div className="toolbar">
                <MenuIcon
                    className="only-mobile"
                    onClick={this.toggleDrawer}
                    aria-label="Open drawer"
                />

                <img
                    className="logo"
                    alt="logo"
                    src={require(`../images/logo.png`)}
                />

                <div className="search">
                    <SearchInput />
                </div>
            </div>
        )
    }

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

                {/* Toolbar with hamburguer menu, logo and search input */}
                {this.renderToolbar()}

                {/* Content injected by router */}
                <div className="children-content">{this.props.children}</div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ loadInitalData }, dispatch)
export default connect(
    null,
    mapDispatchToProps
)(MainLayout)
