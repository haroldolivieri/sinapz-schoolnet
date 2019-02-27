import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';
import '../css/DashboardPaper.css'


function ResolveTextDate( timeToAssesment ) {
    const now = new Date();
    const assesmentTimeStamp = (new Date(timeToAssesment)).getTime();
    const nowTimeStamp = now.getTime();

    console.log(assesmentTimeStamp)
    console.log(nowTimeStamp)
    if (assesmentTimeStamp > nowTimeStamp) {
        return "Começa em "
    } else {
        return "Começou há "
    }
}


function ResolveDate( timeToAssesment ) {
    const now = new Date();
    const assesmentTimeStamp = (new Date(timeToAssesment)).getTime();
    const nowTimeStamp = now.getTime();
    //
    // console.log(assesmentTimeStamp)
    // console.log(nowTimeStamp)
    // if (assesmentTimeStamp > nowTimeStamp){
    //     text = "Começa em <b>"
    // }else{
    //     text = "Começou há <b>"
    // }


    const microSecondsDiff = Math.abs(assesmentTimeStamp - nowTimeStamp );
    const daysDiff = Math.floor(microSecondsDiff / (1000 * 60 * 60  * 24));
    if ( daysDiff > 2 ){
        return ( daysDiff + " dias." );
    }else if ( daysDiff === 1 ){
        return ( daysDiff + " dia." );
    } else{
        let restTimeStamp = Math.floor(microSecondsDiff - (daysDiff * (1000 * 60 * 60  * 24)));
        if (restTimeStamp <= (1000 * 60)){
            return ( "menos de 1 minuto." );
        }else{
            const hoursDiff = Math.floor(restTimeStamp / (1000 * 60 * 60 ));
            restTimeStamp = Math.floor(restTimeStamp - ( hoursDiff * (1000 * 60 * 60)));
            const minutesDiff = Math.floor(restTimeStamp / (1000 * 60));
            return ( hoursDiff + "h " + minutesDiff + "m." );
        }
    }
}

export const DashboardPaper = ({
                               classes = {},
                               type = 'Tipo de Avaliacao',
                               discipline = 'Disciplina',
                               group = 'Grupo',
                               timeToAssesment = '2019-02-26T15:30:00-03:00',
}) => (

        <Paper className="paper">
            <div class="paper_content">
                    <b> { type } </b> de <b> { discipline }</b> da <b> { group } </b>
            </div>
            <div className="paper_content">
                { ResolveTextDate(timeToAssesment) } <b> { ResolveDate(timeToAssesment) } </b>
            </div>
        </Paper>
);


DashboardPaper.propTypes = {
    classes: PropTypes.object.isRequired,
    type: PropTypes.string,
    discipline: PropTypes.string,
    group: PropTypes.string,
    timeToAssesment: PropTypes.string,
};

export default DashboardPaper;

