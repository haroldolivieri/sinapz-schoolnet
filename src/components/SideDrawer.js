import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import '../css/SideDrawer.css'

export const DrawerItem = ({
    text = 'Unknown',
    icon = <ItemIcon />,
    action = function() {}
}) => (
    <ListItem id="list-item" button key={text} onClick={action}>
        <ListItemIcon>{icon}</ListItemIcon>
        <p className="item-text">{text}</p>
    </ListItem>
)
DrawerItem.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element,
    action: PropTypes.func
}

export const ItemIcon = ({ img = 'undefined.svg', alt = '' }) => (
    <img src={require(`../images/${img}`)} alt={alt} />
)

export const SideDrawer = ({
    history,
    menuItems = [],
    schoolnetInfo = {
        name: 'Anonymous',
        photo:
            'https://cdn.shopify.com/s/files/1/0539/4361/products/anonymous-guy-fawkes-anarchy-decal.jpg?v=1410346765'
    }
}) => {
    const handleItemSelected = pathTo => {
        history.push(pathTo)
    }

    const AvatarImage = ({ url, alt = '' }) => (
        <img src={url} className="avatar" alt={alt} />
    )

    return (
        <div className="drawer">
            <AvatarImage url={schoolnetInfo.photo} alt={schoolnetInfo.name} />
            <span className="title">{schoolnetInfo.name}</span>
            <div className="list">
                {menuItems.map(item => (
                    <DrawerItem
                        id="drawer-item"
                        key={item.name}
                        text={item.name}
                        icon={<ItemIcon img={item.icon} alt={item.name} />}
                        action={handleItemSelected.bind(this, item.path)}
                    />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    schoolnetInfo: state.menu.get('schoolnetInfo'),
    menuItems: state.menu.get('menuItems')
})

export default compose(
    withRouter,
    connect(mapStateToProps)
)(SideDrawer)

SideDrawer.propTypes = {
    history: PropTypes.object,
    menuItems: PropTypes.array,
    schoolnetInfo: PropTypes.object
}
