import React, { Component } from 'react';
import Link from 'react-router-dom/Link';
import Web3 from 'web3';
// import jwt_decode from "jwt-decode";


class WalletContainer extends Component {
    state = {
        token: '',
        address: '',
        mHTML: 3,
        network: '',
        web3js: ''
    }

    detectNetwork () {
        if (typeof window.web3 !== 'undefined' && !this.state.web3Defined) {
            this.setState({
                mHTML: 1,
                web3js: new Web3(window.web3.currentProvider)
            })
      
            window.web3.version.getNetwork((err, netId) => {
              switch (netId) {
                  case "1":
                      this.setState({network: 'This is mainnet'})
                      break
                  case "2":
                      this.setState({network: 'This is the deprecated Morden test network.'})
                      break
                  case "3":
                      this.setState({network: 'This is the ropsten test network.'})
                      break
                  case "4":
                      this.setState({network: 'This is the Rinkeby test network.'})
                      break
                  case "42":
                      this.setState({network: 'This is the Kovan test network.'})
                      break
                  default:
                      this.setState({network: 'This is an unknown network.'})
              }
            })
          } else {
            // set the provider you want from Web3.providers
            console.log('no network detect')
            this.setState({
              mHTML: 2
            })
          }
    }

    componentDidMount () {
        this.detectNetwork();
        setInterval(this.detectNetwork(), 2000);
      }

  render() {
    let html;
    if(this.state.mHTML === 2){
        html = (
            <div style={{textAlign: 'center'}}>
              <div className="row js350">
                <div className="col-6 js451">
                  <div style={{borderBottom: '2px'}}>
                    <h2>OPPS</h2>
                    <p>You'll Need A Place To Store All Of Your Token</p>
                  </div>
                  <div>
                    <img src="https://thumbs.gfycat.com/FlippantInformalAsianwaterbuffalo-size_restricted.gif" alt="animated"/>
                  </div>
                  <div>
                    The perfect place is in a secure wallet like MetaMask. 
                    This will also act as your login to the game (no extra password needed).
                  </div>
                  <div>
                    <a className="btn btn-success active" href="https://addons.mozilla.org/en-US/firefox/addon/ether-metamask/">
                    <button>Get from Firefox Or Google Add-ons Store</button>
                    </a>
                  </div>
                  <div>Or</div>
                </div>
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
        )
    } else if(this.state.mHTML === 1){
      html = (
        <div className="row js350">
        <div className="col-6 js451">
          <div style={{borderBottom: '2px'}}>PERFECT</div> 
          <div>
            <h4>Your wallet is unlocked! Please partitipate in token sale</h4>
          </div> 
        </div>
        </div>
      )
    }

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
            <div>
              {html}
            </div>
        </div>
    );
  }
}

export default WalletContainer;