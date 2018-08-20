import React, { Component } from 'react';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import NewWallet from './NewWallet';
import OpenWallet from './OpenWallet';
import TokenSale from './TokenSale';
import BodyHomePage from './BodyHomepage';

class Wallet extends Component {
  render() {
    return (
      <Switch>
          <Route exact path='/wallet' component={BodyHomePage}/>
          <Route path='/wallet/new-wallet' component={NewWallet}/>
          <Route path='/wallet/open-wallet' component={OpenWallet}/>
          <Route path='/wallet/token-sale' component={TokenSale}/>
      </Switch>
    );
  }
}

export default Wallet ;