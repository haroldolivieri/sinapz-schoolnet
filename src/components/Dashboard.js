import React from 'react';
import Grid from "@material-ui/core/Grid";
import { DashboardCard, DashboardPaper } from '.'
import PropTypes from 'prop-types'

export const DashboardIndice = ({
    quantidade = 0,
    tipo = 'Unknown',
}) => (
    <Grid item md={4}>
        <DashboardCard
            // backgroundColor="#00f"
            quantidade = { quantidade }
            tipo = { tipo }
        />
    </Grid>
)
DashboardIndice.propTypes = {
    quantidade: PropTypes.number,
    tipo: PropTypes.string,
}

export const DashboardAvaliacao = ({
    tipo = 'Unknown',
    disciplina = 'Unknown',
    grupo = 'Unknown',
    tempoRestante = 'Unknown'
}) => (
    <DashboardPaper
        tipo = { tipo }
        disciplina = { disciplina }
        grupo = { grupo}
        tempoRestante = { tempoRestante }
    />
)
DashboardAvaliacao.propTypes = {
    tipo: PropTypes.string,
    disciplina: PropTypes.string,
    grupo: PropTypes.string,
    tempoRestante: PropTypes.string,
}

const Dashboard = () => (
    <div>
        <div>
            <Grid container spacing={24}>
            {/* Start DashboardIndices Temp */}
                <Grid item md={4}>
                    <DashboardCard
                        // backgroundColor="#00f"
                        quantidade = "5"
                        tipo = "Filiais"
                    />
                </Grid>
                <Grid item md={4}>
                    <DashboardCard
                        // backgroundColor="#00f"
                        quantidade = "40"
                        tipo = "Professores"
                    />
                </Grid>
                <Grid item md={4}>
                    <DashboardCard
                        // backgroundColor="#00f"
                        quantidade = "200"
                        tipo = "Alunos"
                    />
                </Grid>
            {/* End Temp */}
            {/* {DashboardIndices.map(item => (
                    <DashboardIndice
                        quantidade={item.quantidade}
                        tipo={item.tipo}
                    />
                ))} */}
            </Grid>
        </div>
        <div>
            <h1>Próximas Avaliações em 24h </h1>
            {/* Start DashboardAvaliacoes Temp */}
            <DashboardPaper
                tipo={"Prova"}
                disciplina={ "Geografia" }
                grupo = { "Ensino Médio"}
                tempoRestante={ "30m" }
            />
            <br/>
            <DashboardPaper
                tipo={"Teste"}
                disciplina={ "Matematica" }
                grupo = { "Ensino Fundamental"}
                tempoRestante={ "1h" }
            />
            <br/>
            <DashboardPaper
                tipo={"Prova"}
                disciplina={ "Geografia" }
                grupo = { "Ensino Médio"}
                tempoRestante={ "2h" }
            />
            <br/>
            <DashboardPaper
                tipo={"Prova"}
                disciplina={ "Geografia" }
                grupo = { "Ensino Médio"}
                tempoRestante={ "30m" }
            />
            <br/>
            <DashboardPaper
                tipo={"Teste"}
                disciplina={ "Matematica" }
                grupo = { "Ensino Fundamental"}
                tempoRestante={ "1h" }
            />
            <br/>
            <DashboardPaper
                tipo={"Prova"}
                disciplina={ "Geografia" }
                grupo = { "Ensino Médio"}
                tempoRestante={ "2h" }
            />
            <br/>
            {/* End DashboardAvaliacoes Temp */}
            {/* {DashboardAvaliacoes.map(item => (
                    <DashboardAvaliacao
                        tipo={item.tipo}
                        disciplina={item.disciplina}
                        grupo={item.grupo}
                        tempoRestante={item.tempoRestante}
                    />
                ))} */}
        </div>
    </div>
)

export default Dashboard
