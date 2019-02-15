import React from 'react';
import Grid from "@material-ui/core/Grid";
import { DashboardCard, DashboardPaper } from '../components'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


export const DashboardIndice = ({
    quantidade = 0,
    tipo = 'Unknown',
}) => (
        <DashboardCard
            quantidade = { quantidade }
            tipo = { tipo }
        />
)
DashboardIndice.propTypes = {
    quantidade: PropTypes.number,
    tipo: PropTypes.string,
}

export const DashboardAvaliacao = ({
    tipo = 'Unknown',
    disciplina = 'Unknown',
    grupo = 'Unknown',
    tempoParaAvaliacao = 'Unknown'
}) => (
    <DashboardPaper
        tipo = { tipo }
        disciplina = { disciplina }
        grupo = { grupo }
        tempoParaAvaliacao = { tempoParaAvaliacao }
    />
)
DashboardAvaliacao.propTypes = {
    tipo: PropTypes.string,
    disciplina: PropTypes.string,
    grupo: PropTypes.string,
    tempoParaAvaliacao: PropTypes.string,
}

const Dashboard = ({
    dashboardIndices = [],
    dashboardAvaliacoes = []
}) => (
    <div>
        <div>
            <Grid container spacing={24}>
            {dashboardIndices.map(item => (
                <Grid item md={4}>
                    <DashboardCard
                        quantidade={item.quantidade}
                        tipo={item.tipo}
                    />
                </Grid>
                ))}
            </Grid>
        </div>
        <div>
            <h1>Próximas Avaliações em 24h </h1>
            {dashboardAvaliacoes.map(item => (
                    <DashboardPaper
                        tipo={item.tipo}
                        disciplina={item.disciplina}
                        grupo={item.grupo}
                        tempoParaAvaliacao={item.tempoParaAvaliacao}
                    />
                ))}
        </div>
    </div>
)

const mapStateToProps = state => ({
    dashboardIndices: state.dashboard.get('dashboardIndices'),
    dashboardAvaliacoes: state.dashboard.get('dashboardAvaliacoes')
})

// function mapStateToProps(state) {
//     dashboardIndices: state.dashboard.get('dashboardIndices')
//     dashboardAvaliacoes: state.dashboard.get('dashboardAvaliacoes')
//     console.log(state)
//   }

export default connect(mapStateToProps)(Dashboard)

Dashboard.propTypes = {
    dashboardIndices: PropTypes.array,
    dashboardAvaliacoes: PropTypes.array
}