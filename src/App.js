import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';
import MainLayout from './containers/MainLayout';
import { NotFound, NotImplementedYet } from './components'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const uitheme = createMuiTheme({
  palette: {
    secondary: { main: '#4986DD' }
  },
  typography: {
    useNextVariants: true,
    fontSize: '11',
    fontFamily: 'Montserrat, sans-serif'
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={uitheme}>
        <ConnectedRouter history={history}>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={NotImplementedYet} />
              <Route path="/agenda" component={NotImplementedYet} />
              <Route path="/branchs" component={NotImplementedYet} />
              <Route path="/teachers" component={NotImplementedYet} />
              <Route path="/assessment-variables" component={NotImplementedYet} />
              <Route path="/subjects" component={NotImplementedYet} />
              <Route path="/segments" component={NotImplementedYet} />
              <Route path="/help" component={NotImplementedYet} />
              <Route component={NotFound} />
            </Switch>
          </MainLayout>
        </ConnectedRouter>
      </MuiThemeProvider >
    );
  }
}

export default App;
