import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Typography } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import PropTypes from 'prop-types';
import '../css/SideDrawer.css'
import '../css/AvatarImage.css'

export const DrawerItem = ({ text = "Unknown", icon = <InboxIcon />, action = function () { } }) => (
    <ListItem id="list-item" button key={text} onClick={action()}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
    </ListItem>
)

DrawerItem.propTypes = {
    text: PropTypes.string,
    icon: PropTypes.element,
}

const AvatarImage = ({ url }) => (
    <img src={url} alt="Avatar" />
)

const SideDrawer = ({
    url = "https://cdn.shopify.com/s/files/1/0539/4361/products/anonymous-guy-fawkes-anarchy-decal.jpg?v=1410346765",
    name = "Escola Anônima"
}) => (
        <div className="drawer" >
            <AvatarImage url={url} />
            <Typography className="title">{name}</Typography>
            <div className="list">
                <DrawerItem text="Dashboard" />
                <DrawerItem text="Agenda" />
                <DrawerItem text="Filiais" />
                <DrawerItem text="Professores" />
                <DrawerItem text="Variáveis da prova" />
                <DrawerItem text="Matérias disponíveis" />
            </div>
        </div>
    )

export default SideDrawer

SideDrawer.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
}