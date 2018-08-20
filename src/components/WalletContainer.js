import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
// import jwt_decode from "jwt-decode";


class WalletContainer extends Component {
    state = {
        token: '',
        address: '',
    }

  render() {
    return (
        <div className="container">
            <div className="row js350">
                <div className="js450 Wallet">
                    <div className="col-4 js451">
                        <h1 className="js550">Wallet</h1>
                    </div>
                    <div className="col-6 js452 button">
                            <Link className="button-link-1" to='/wallet/new-wallet'>New Wallet</Link>
                            <Link className="button-link-1" to='/wallet/open-wallet'>Open Wallet</Link>
                            <Link className="button-link-1" to='/wallet/token-Sale'>Participate in token sale</Link>
                            <Link className="button-link-1" to='/'>Menu</Link>
                    </div>
                </div>
            </div>
            <div className="row js350">
                <div className="col-6 js451">
                    <h4>Unlock your wallet to claim GAS</h4>
                    <form>
                        <div className="form-group js401">
                            <label htmlFor="password">Enter Password</label>
                            <input type="password" className="form-control" id="password" />
                        </div>
                        <button type="submit" className="btn btn-success">Unlock</button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
}

export default WalletContainer;