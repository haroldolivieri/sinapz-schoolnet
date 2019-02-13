import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { history } from './store'
import MainLayout from './containers/MainLayout'
import Branches from './containers/Branches'
import {
    NotFound,
    Dashboard,
    Agenda,
    Teachers,
    Variables,
    Subjects,
    Segments,
    Help
} from './components'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const uitheme = createMuiTheme({
    palette: {
        secondary: { main: '#4986DD' }
    },
    typography: {
        useNextVariants: true,
        fontSize: '11',
        fontFamily: 'Montserrat, sans-serif'
    }
})

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={uitheme}>
                <ConnectedRouter history={history}>
                    <MainLayout>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route path="/agenda" component={Agenda} />
                            <Route path="/branchs" component={Branches} />
                            <Route path="/teachers" component={Teachers} />
                            <Route
                                path="/assessment-variables"
                                component={Variables}
                            />
                            <Route path="/subjects" component={Subjects} />
                            <Route path="/segments" component={Segments} />
                            <Route path="/help" component={Help} />
                            <Route component={NotFound} />
                        </Switch>
                    </MainLayout>
                </ConnectedRouter>
            </MuiThemeProvider>
        )
    }
}

export default App
