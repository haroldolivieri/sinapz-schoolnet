import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../css/DashboardCard.css'


const styles = {
    card: {
        minWidth: 275,
        textAlign: 'center',
        color: 'rgba(255,255,255,1) !important',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
};




function SimpleCard(props) {

    const {
        classes,
        // backgroundColor,
        quantidade,
        tipo,
    } = props;

    return (
        <div class="card square" >
            <Card 
                className={classes.card} 
                >
                <CardContent  class="square_content">
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

export default withStyles(styles)(SimpleCard);
