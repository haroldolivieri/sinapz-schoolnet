import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { selectItem } from '../menu/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import '../css/SideDrawer.css'
import '../css/AvatarImage.css'

export const DrawerItem = ({ text = "Unknown", icon = <ItemIcon />, action = function () { } }) => (
    <ListItem id="list-item" button key={text} onClick={action}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
    </ListItem>
)
DrawerItem.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element,
    action: PropTypes.func
}

const ItemIcon = ({ img = "undefined.svg", alt = "" }) => (
    <img src={require(`../images/${img}`)} alt={`image-${alt}`} />
)

const SideDrawer = ({
    url = "https://cdn.shopify.com/s/files/1/0539/4361/products/anonymous-guy-fawkes-anarchy-decal.jpg?v=1410346765",
    name = "Escola Anônima",
    menuItems = [],
    selectItem = function () { }
}) => {

    const handleItemSelected = pathTo => {
        selectItem(pathTo)
    }

    const AvatarImage = ({ url, alt = "" }) => (
        <img src={url} className="avatar" alt={`image-${alt}`} />
    )

    return (
        <div className="drawer" >
            <AvatarImage url={url} alt={name} />
            <Typography className="title">{name}</Typography>
            <div className="list">
                {menuItems.map(item => (
                    <DrawerItem
                        text={item.name}
                        icon={<ItemIcon img={item.icon} alt={item.name} />}
                        action={handleItemSelected(item.path)} />
                ))}
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch =>
    bindActionCreators({ selectItem }, dispatch)

const mapStateToProps = state => ({
    schoolnetInfo: state.menu.schoolnetInfo,
    menuItems: state.menu.menuItems
})

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
SideDrawer.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
    menuItems: PropTypes.array,
    selectItem: PropTypes.func
}