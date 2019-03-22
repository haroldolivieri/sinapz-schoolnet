import React from 'react';
import { CardWith2Sentences, PaperWith2Sentences } from '../components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../css/Dashboard.css'

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

const Dashboard = ({
    dashboardIndexes = [],
    dashboardAssesments = []
}) => (
    <div>
        <div className="cards">
            {dashboardIndexes.map(item => (
                    <CardWith2Sentences
                        FirstSentence = { [<b className='highlight'>{ item.quantity }</b>] }
                        SecondSentence = { [<b>{ item.type }</b>] }
                    />
                ))}

        </div>
        <div>
            <h1>Próximas Avaliações em 24h </h1>
            {dashboardAssesments.map(item => (
                    <PaperWith2Sentences
                        FirstSentence = {[<b> { item.type } </b>, " de ", <b>{ item.discipline }</b>, " da ", <b>{ item.group }</b>]}
                        SecondSentence = {[ ResolveTextDate(item.timeToAssesment) ,<b> { ResolveDate(item.timeToAssesment) } </b>]}
                    />
                ))}
        </div>
    </div>
);

const mapStateToProps = state => ({
    dashboardIndexes: state.dashboard.get('dashboardIndexes'),
    dashboardAssesments: state.dashboard.get('dashboardAssesments')
});

export default connect(mapStateToProps)(Dashboard)

Dashboard.propTypes = {
    dashboardIndexes: PropTypes.array,
    dashboardAssesments: PropTypes.array
};