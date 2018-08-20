import React, { Component } from 'react';
import Web3 from 'web3';

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
      

  render() {
    return (
        <div className="container">
        <div className="row js350">
            <div className="js450">
                <h1 className="js550">Participate in a token sale</h1>
            </div>
            <div className="js451 tokensale">
                <div className="col-md-8">
                    <form>
                        <div class="form-group">
                            <label>Select ICO token to purchase</label>
                            <div class="btn-group">
                            <a role="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown">
                            ICOs
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">SON</a>
                                <a class="dropdown-item" href="#">ETH</a>
                            </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label>What are you purchasing with?</label>
                        </div>
                        <div class="form-group">
                            <label>Amount of NEO</label>
                        </div>
                    </form>
                {/* <div className='col-md-8' id="showUp">
                    {mHTML}
                </div> */}
                </div>
            </div>
        </div>
    </div>
    );
  }
}

export default TokenSale;