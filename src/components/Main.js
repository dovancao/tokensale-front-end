import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import BodyHomePage from './BodyHomepage';
import Block from './Block';
import Transactions from './Transactions';
import Assets from './Assets';
import Contract from '../Contract';
import Wallet from './Wallet';

class Main extends Component {
  render() {
    return (
      <main>
          <Switch>
              <Route exact path='/' component={BodyHomePage}/>
                <Route path='/wallet' component={Wallet}/>
                <Route path='/browse/block' component={Block}/>
                <Route path='/browse/tx' component={Transactions}/>
                <Route path='/browse/assets' component={Assets}/>
                <Route path='/browse/contract' component={Contract}/>
          </Switch>
      </main>
    );
  }
}

export default Main;