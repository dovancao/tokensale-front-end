import React, { Component } from 'react';
import Web3 from 'web3';
const crowdsaleABI = require('../Crowdsale');
let web3 = new Web3();

class TokenSale extends Component {
  state = {
      metamask: '',
      web3js: null
  }

  componentDidMount() {
    if (typeof window.web3 !== 'undefined' && !this.state.web3Defined) {
            let web3js = new Web3(window.web3.currentProvider);
            this.setState({
                web3js: web3js,
                metamask: ''
            })
      
            window.web3.version.getNetwork((err, netId) => {
              switch (netId) {
                  case "1":
                      console.log('This is mainnet')
                      break
                  case "2":
                      console.log('This is the deprecated Morden test network.')
                      break
                  case "3":
                      console.log('This is the ropsten test network.')
                      break
                  case "4":
                      console.log('This is the Rinkeby test network.')
                      break
                  case "42":
                      console.log('This is the Kovan test network.')
                      break
                  default:
                      console.log('This is an unknown network.')
              }
            })
          } else {
            // set the provider you want from Web3.providers
            console.log('no network detect')
            this.setState({
              visible: true
          })
        }
    }
  
    buyToken = () => {
      let web3Instance = this.state.web3js;
      web3Instance.eth.defaultAccount = web3.eth.accounts[0];
      let crowdSaleContract = new web3Instance.eth.Contract(crowdsaleABI);
      let crowdSale = crowdSaleContract.at('0xb51287b481c437bdd1c7eeb977491052b87fda94');
      crowdSale.buyTokens(web3Instance.eth.defaultAccount);
    }
      
  render() {
    console.log(this.state.web3js);
    return (
        <div className="container">
        <div className="row js350">
            <div className="js450">
                <h1 className="js550">Fill out the details to participate</h1>
            </div>
            <div className="js451 tokensale">
                <div className="row">
                  <div className="form-group col-4">
                    <div>
                      <label style={{fontSize: "15px", fontWeight: "bold"}}
                      >Select ICO Token To Purchase </label>
                    </div>
                    <div className="dropdown">
                      <button type="button" 
                              className="btn btn-success dropdown-toggle"
                              data-toggle="dropdown" 
                              aria-haspopup="true" 
                              aria-expanded="false"
                      >SON Token</button>
                      {/* <div className="dropdown-menu" ria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item">SON</a>
                        <a className="dropdown-item">ETH</a>
                      </div> */}
                    </div>
                  </div>
                    <div className="form-group col-4">
                      <div>
                        <label style={{fontSize: "15px", fontWeight: "bold"}}>
                        What are you purchasing with?</label>
                      </div>
                      <div>
                        <input placeholder="ETH" disabled="disabled"></input>
                      </div>
                    </div>
                    <div className="form-group col-4">
                      <div>
                        <label style={{fontSize: "15px", fontWeight: "bold"}}>Amount of ETH?</label>
                      </div>
                      <div>
                        <input placeholder="1 ETH"></input>
                      </div>
                    </div>
                </div>
            </div>
            <button
              onClick={this.buyToken} 
              type="button" 
              className="btn btn-success">
            I Agree And Buy Son Token Now!</button>
        </div>
    </div>
    );
  }
}

export default TokenSale;