import React from 'react';
import { DashboardCard, DashboardPaper } from '../components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../css/Dashboard.css'

export const DashboardIndex = ({
    quantity = 0,
    type = 'Unknown',
}) => (
        <DashboardCard
            quantity = { quantity }
            type = { type }
        />
);
DashboardIndex.propTypes = {
    quantity: PropTypes.number,
    type: PropTypes.string,
};

export const DashboardAssesment = ({
    type = 'Unknown',
    discipline = 'Unknown',
    group = 'Unknown',
    timeToAssesment = 'Unknown'
}) => (
    <DashboardPaper
        type = { type }
        discipline = { discipline }
        group = { group }
        timeToAssesment = { timeToAssesment }
    />
);
DashboardAssesment.propTypes = {
    type: PropTypes.string,
    discipline: PropTypes.string,
    group: PropTypes.string,
    timeToAssesment: PropTypes.string,
};

const Dashboard = ({
    dashboardIndexes = [],
    dashboardAssesments = []
}) => (
    <div>
        <div className="cards">
            {dashboardIndexes.map(item => (
                    <DashboardCard
                        quantity={ item.quantity }
                        type={ item.type }
                    />
                ))}

        </div>
        <div>
            <h1>Próximas Avaliações em 24h </h1>
            {dashboardAssesments.map(item => (
                    <DashboardPaper
                        type={item.type}
                        discipline={item.discipline}
                        group={item.group}
                        timeToAssesment={item.timeToAssesment}
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