import React, { Component } from 'react';

class Transfer extends Component {
  render() {
    return (
        <div className="container">
            <div className="row js350">
                <div className="js450">
                    <h1 className="js550">Transfers</h1>
                </div>
                <div className="js451 transfers">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Transfer</th>
                                <th>From</th>
                                <th>To</th>
                                <th>Value</th>
                                <th>Assert</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                    </table>   
                </div>
            </div>
        </div>
    );
  }
}

export default Transfer;