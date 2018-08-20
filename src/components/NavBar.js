import React, { Component } from 'react';
import SearchField from './SearchField'
import Link from 'react-router-dom/Link';

class Navbar extends Component {
  render() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className='navbar navbar-light'>
                    <Link className="button-link-2" to='/wallet'>Wallet</Link>
                    <Link className="button-link-2" to='/browse/block'>Blocks</Link>
                    <Link className="button-link-2" to='/browse/tx'>Transactions</Link>
                    <Link className="button-link-2" to='/browse/address'>Addresses</Link>
                    <Link className="button-link-2" to='/browse/assets'>Assets</Link>
                    <Link className="button-link-2" to='/browse/contract'>Contracts</Link>
                    <SearchField />
                </div>
            </div>
        </div>
    );
  }
}

export default Navbar;