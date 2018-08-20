import React, { Component } from "react";
import axios from "../axios";
import { Link } from 'react-router-dom';

class NewWallet extends Component {
    
    state = {
        password : null,
        isWallet : 2,
        ksString : null,
        address: null,
        private_key: null,
        secretSeed: null
    };

    _changeNewWalletPage = () => {
        this.setState ({
            isWallet : 0
        })
        axios
        .post('api/wallet/new-wallet',{
            password : this.state.password
        }).then(response => {
            this.setState({
                ksString: response.data.keystoreFile,
                address: response.data.address,
                private_key: response.data.private_key,
                secretSeed: response.data.secretSeed
        }).catch(err => console.log(err))
    })

    };

    _onPasswordChange = (password) => {
       this.setState ({
           password : password
       })
    };

  render() {
    let wHTML;

    if(this.state.isWallet === 2){
        wHTML = (
            <div className="row js350">
                <div className="js450">
                    <h1 className="js550">New Wallet</h1>
                </div>
                <div className="col-5 js451 newwallet">
                     <p>This password encrypts your private key. This does not act as a seed to generate your keys.
                        You will need this password and your private key to unlock your wallet.</p>
                     <form onSubmit={this._changeNewWalletPage}>    
                        <div className="form-group js650">
                            <label htmlFor="password" data-shrink="false" >Enter Password</label>
                            <div className="js652">
                                <input 
                                    aria-invalid="false" 
                                    aria-required="false" 
                                    type="password" 
                                    className="form-control" 
                                    id="password" 
                                    onChange={
                                        (event) => this._onPasswordChange(event.target.value)
                                    }
                                    />
                            </div>
                        </div>
                        <div className='js652'>
                            <button className="btn btn-success" tabIndex='0' type="submit">CREATE</button>
                        </div>
                     </form>
                </div>
            </div>
                )
    }else{
        wHTML = (
            <div className="row js350">
                <div className="col-md-12 md-6">
                    <p>You must save and backup the keys below. If you lose them, you lose access to your assets. You can click "Save Key" to save the encrypted key in local application storage. Verify that you can log in to the account and see the correct public address before sending anything to the address below!</p>
                    <canvas></canvas>
                    <p><b>Passphrase: </b>{this.state.secretSeed}</p>
                    <p><b>Addresses: </b>{this.state.address}</p>
                    <p><b>Private key: </b>{this.state.private_key}</p>
                    <div>
                        <a >
                            <span transalte="x_Download" className="ng-scope">Download</span>
                            <span transalte="x_Keystore2" className="ng-scope">Keystore File (UTC/JSON)</span>
                        </a>
                        <span></span>
                        <Link to="/wallet/open-wallet">Open Wallet</Link>     
                    </div>
                </div>
            </div>
            )
    }

    return (
        <div className="container">
                {wHTML}
        </div>
    );
  }
}

export default NewWallet;