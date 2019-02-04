import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './store';
import MainLayout from './containers/MainLayout';
import NotFound from './components/NotFound'

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
              <Route path="/" component={NotFound} />
              <Route path="/branchs" component={NotFound} />
              <Route path="/teachers" component={NotFound} />
            </Switch>
          </MainLayout>
        </ConnectedRouter>
      </MuiThemeProvider >
    );
  }
}

export default App;
