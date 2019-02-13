import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import SideDrawer from './SideDrawer'
import PropTypes from 'prop-types'

const ResponsiveDrawer = ({ opened = false, onClose = function() {} }) => (
    <Drawer id="drawer" open={opened} onClose={onClose}>
        <div className="only-mobyle">
            <SideDrawer />
        </div>
    </Drawer>
)

export default ResponsiveDrawer

ResponsiveDrawer.propTypes = {
    opened: PropTypes.bool,
    onClose: PropTypes.func
}
