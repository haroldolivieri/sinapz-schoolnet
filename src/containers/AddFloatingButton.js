import React, { Component } from 'react'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Fab from '@material-ui/core/Fab'
import Grow from '@material-ui/core/Grow'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import AddIcon from '@material-ui/icons/Add'
import PropTypes from 'prop-types'
import '../css/AddFloatingButton.css'

export class AddFloatingButton extends Component {
    state = {
        open: false
    }

    toogleFabPopup = () => {
        this.setState(state => ({ open: !state.open }))
    }

    closeFabPopup = () => {
        this.setState({ open: false })
    }

    render() {
        const items = this.props.popupItems

        const popupMenu = (
            <Paper style={{ backgroundColor: '#3c4754' }}>
                <ClickAwayListener onClickAway={this.closeFabPopup}>
                    <MenuList>
                        {items.map(popupItem => (
                            <MenuItem
                                key={popupItem.text}
                                onClick={() => {
                                    popupItem.action()
                                    this.closeFabPopup()
                                }}
                            >
                                <h3>{popupItem.text}</h3>
                            </MenuItem>
                        ))}
                    </MenuList>
                </ClickAwayListener>
            </Paper>
        )

        return (
            <div className="fab">
                <Fab
                    color="primary"
                    buttonRef={node => {
                        this.anchorEl = node
                    }}
                    onClick={
                        items.length === 1
                            ? items[0].action
                            : this.toogleFabPopup
                    }
                >
                    <AddIcon />
                </Fab>
                <Popper
                    open={this.state.open}
                    anchorEl={this.anchorEl}
                    placement="top-end"
                    transition
                >
                    {({ TransitionProps }) => (
                        <Grow {...TransitionProps}>{popupMenu}</Grow>
                    )}
                </Popper>
            </div>
        )
    }
}
AddFloatingButton.propTypes = {
    popupItems: PropTypes.array.isRequired
}
