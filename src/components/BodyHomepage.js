import React, { Component } from 'react';
import WalletContainer from './WalletContainer';
import Transfer from './Transfer';
import Transactions from './Transactions';
import Transfers from './Transfers';
import Details from './Details';

class BodyHomePage extends Component {
  render() {
    return (
        <div className="js250 bodyHomePage">
            <WalletContainer />
            <Transfer />
            <Transactions />
            <Transfers />
            <Details />
        </div>
    );
  }
}

export default BodyHomePage;