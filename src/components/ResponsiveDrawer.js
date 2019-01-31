import Drawer from '@material-ui/core/Drawer';
import SideDrawer from './SideDrawer';
import React from 'react';

const ResponsiveDrawer = ({ navDrawerOpened, toggleDrawer }) => (
    <Drawer id="drawer" open={navDrawerOpened} onClose={toggleDrawer(false)}>
        <div className="only-mobyle">
            <SideDrawer />
        </div>
    </Drawer>
)

export default ResponsiveDrawer