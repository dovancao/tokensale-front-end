import React, { Component } from 'react';

class BlockchainExplorer extends Component {
  render() {
    return (
      <div className="container">
      <h2>Blockchain Explorer</h2>
      <hr/>
      <form className="col-3">
        <input className="form-control" type="text" placeholder="Search by block/tx/address hash or block index" />
      </form>
      </div>
    );
  }
}

export default BlockchainExplorer;