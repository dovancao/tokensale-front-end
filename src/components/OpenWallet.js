import React, { Component } from 'react';
import axios from '../axios';
// import history from '../history';
import { message } from 'antd';

class OpenWallet extends Component {

    state = {
        click_id: 2,
        pvk: ''
    };
    
    _addKeystoreHtml = () => {
        this.setState({
            click_id : 0
        })
    };

    _addPrivateKeyHtml = () => {
        this.setState({
            click_id :1
        })
    }

    onPrivateKeyChange = (event) => {
        this.setState({
            pvk : event.target.value
        })
    }

    _postPrivateKey = () => {
        axios
        .post('/api/wallet/open-wallet',{
            privateKey: this.state.pvk
        })
        .then(response => {
            console.log(response);
            console.log(response.data);
            this.props.params.token = response.data.token;
            window.location = "/";
        })
        .catch(error => {
            console.log(error);
            message.error('Fail, Please Try Again!')
        })
    }

  render() {
    console.log(this.state.pvk);
    let mHTML;
    if(this.state.click_id === 0 ){
         mHTML = (<div>
                        <a className='btn btn-secondary'>SELECT WALLET FILE...</a>
                            <input id="fselector" type="file" name="file_source" />
                            <span className='label label-info' id="upload-file-info"></span>
                        </div>)
    }else if(this.state.click_id === 1){
         mHTML = (<div>
                    <form onSubmit={this._postPrivateKey}>
                        <div className="form-group">
                            <label htmlFor="pw">Paste or type private key</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="pw"
                                onChange = {this.onPrivateKeyChange} 
                            />
                        </div>
                        <button className="btn btn-pvk">Unlock</button>
                    </form>
                </div>)
    }

    return (
        <div className="container">
            <div className="row js350">
                <div className="js450">
                    <h1 className="js550">Open Wallet</h1>
                </div>
                <div className="js451 openwallet">
                    <div className="col-md-4">
                        <label className="questionAccessWallet">"How would you like to access your wallet?"
                            <span className="jss467">&thinsp;*</span>
                        </label>
                        <div className="radioGroup" role="radiogroup" aria-label="Open Wallet">
                            <div className="radio" id="keystore" onClick={this._addKeystoreHtml}>
                                <label><input type="radio" name="optradio" />Keystore File</label>
                            </div>
                            <div className="radio" id="privatekey" onClick={this._addPrivateKeyHtml} >
                                <label><input 
                                    type="radio" 
                                    name="optradio" />Private Key</label>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-8' id="showUp">
                        {mHTML}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default OpenWallet;
