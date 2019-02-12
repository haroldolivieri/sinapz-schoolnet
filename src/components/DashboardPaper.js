import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import '../css/DashboardPaper.css'

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,

    }
});


function PaperSheet(props) {
    const { classes, tipo, disciplina, grupo, tempoRestante } = props;

    return (
        <div class="paper">
            <Paper 
                className={classes.root} 
                elevation={1}
                >
                <div class="left">
                    <Typography variant="h5" component="h3">
                        <b>{ tipo }</b> de <b>{ disciplina }</b> do <b>{ grupo }</b>
                    </Typography>
                </div>
                <div class="right">
                    <Typography component="h4">
                        Começa em <b>{ tempoRestante} </b>
                    </Typography>
                </div>
            </Paper>
        </div>
    );
}

PaperSheet.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);

