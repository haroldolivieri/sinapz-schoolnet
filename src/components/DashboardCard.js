import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../css/DashboardCard.css'

export const DashboardCard = ({
                               classes = {},
                               quantity = 0,
                               type = 'Tipo desconhecido'
}) => (
        <Card className="card">
            <CardContent  className="card_content">
                    <b className="highlight">{ quantity }</b>
                    <b>{ type }</b>
            </CardContent>
        </Card>
);

DashboardCard.propTypes = {
    classes: PropTypes.object.isRequired,
    quantity: PropTypes.number,
    type: PropTypes.string,
};

export default DashboardCard;
