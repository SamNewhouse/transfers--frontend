import React, { Component } from 'react'
import Transfer from '../app/components/Transfer'
import data from '../app/data/data.json'
import '../public/styles/app.scss'


class App extends Component {
    render() {

        const transfers = data;

        const forTransfers = transfers.map((transfer) => 
            <Transfer
                    player={transfer.player}
                    transferPreviousTeam={transfer.transferPreviousTeam}
                    transferNewTeam={transfer.transferNewTeam}
                    transfer={transfer.transfer}
                    transferDateTime={transfer.transferDateTime}
                />
        );

        return (
            <div className="container">
                <div className="inner">
                    {forTransfers}
                </div>
            </div>
        );
      }
}

export default App;