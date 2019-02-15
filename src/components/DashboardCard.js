import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../css/DashboardCard.css'


function SimpleCard(props) {

    const {
        quantidade,
        tipo,
    } = props;

    return (
        <div class="card" >
            <Card>
                <CardContent  class="card_content">
                    <Typography variant="h1" component="h1" >
                        <b>{ quantidade }</b>
                    </Typography>
                    <Typography variant="h2" component="h2">
                        <b>{ tipo }</b>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default 
    SimpleCard;
