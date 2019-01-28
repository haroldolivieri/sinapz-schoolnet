import Drawer from '@material-ui/core/Drawer';
import SideDrawer from './SideDrawer';
import React from 'react';

const ResponsiveDrawer = ({navDrawerOpened, toggleDrawer}) => (
    <Drawer open={navDrawerOpened} onClose={toggleDrawer(false)}>
        <div
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <div className="only-mobyle">
                <SideDrawer />
            </div>
        </div>
    </Drawer>
)

export default ResponsiveDrawer