import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import login from './component/login/login';
import Home from './component/Home';
import table from './component/table';
import eight from './component/eight';
import signup from './component/signup';
import search from './component/search';
import googlesrc from './component/googlesrc';
class App extends Component {
  render() {
    return (
      <Router>
              <Switch>
                 <Route
                 exact path='/Home' component={Home} />
                 <Route exact path='/' component={login} />
                 <Route exact path='/search' component={search} />
                  <Route exact path='/signup' component={signup} />
                 <Route exact path='/add-imagese/imgs/:id' component={table} />
                 <Route exact path='/add-imagess/imgs/:id' component={eight} />
                  <Route exact path='/googlesrc' component={googlesrc} />
              </Switch>
        </Router>
      
    );
  }
}
export default App;
