/**
 * Created by dileepkumar on 4/9/18.
 */

import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import { ConnectedRouter }  from 'react-router-redux';
import Counter from './Counter';

class Routes extends React.Component {
  
  constructor(props){
    super(props);
  }
  
  render() {
    
    return (
    <React.Fragment>
      <ConnectedRouter history={this.props.history}>
        <Switch>
          <Route path='/' component={Counter} />
          <Route path='/counter' component={Counter} />
        </Switch>
      </ConnectedRouter>
    </React.Fragment>)

   }
}

export default Routes;