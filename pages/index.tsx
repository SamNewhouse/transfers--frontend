import React, { Component } from 'react'
import Transfer from '../app/presentation/components/Transfer'
import '../public/styles/app.scss'


class App extends Component {
    render() {

        const transfers = [
            {
                "player":[
                    {
                        "name":"moxie",
                        "age":28,
                        "country":"Singapore"
                    },
                    {
                        "name":"Tommy",
                        "age":19,
                        "country":"Singapore"
                    },
                    {
                        "name":"YSK",
                        "age":25,
                        "country":"Singapore"
                    },
                    {
                        "name":"skillZ",
                        "age":22,
                        "country":"India"
                    },
                    {
                        "name":"insanity",
                        "age":23,
                        "country":"Singapore"
                    },
                ],
                "transferPreviousTeam":{
                    "logo":"",
                    "name":"",
                },
                "transferNewTeam":{
                    "logo":"https://static.hltv.org/images/team/logo/9183",
                    "name":"Winstrike",
                },
                "transfer":"in",
                "transferDateTime":"09-06-2020"
            },{
                "player":[
                    {
                        "name":"Frank",
                        "age":24,
                        "country":"England"
                    },{
                        "name":"Sam",
                        "age":27,
                        "country":"Denmark"
                    },{
                        "name":"Emile",
                        "age":23,
                        "country":"Spain"
                    }
                ],
                "transferPreviousTeam":{
                    "logo":"https://static.hltv.org/images/team/logo/5995",
                    "name":"G2",
                },
                "transferNewTeam":{
                    "logo":"https://static.hltv.org/images/team/logo/5973",
                    "name":"Liquid",
                },
                "transfer":"move",
                "transferDateTime":"04-12-2020"
            },{
                "player":[
                    {
                        "name":"Mary",
                        "age":21,
                        "country":"Germany"
                    },
                    {
                        "name":"John",
                        "age":19,
                        "country":"Russia"
                    }
                ],
                "transferPreviousTeam":{
                    "logo":"https://static.hltv.org/images/team/logo/7533",
                    "name":"North",
                },
                "transferNewTeam":{
                    "logo":"",
                    "name":"",
                },
                "transfer":"out",
                "transferDateTime":"05-12-2020"
            },{
                "player":[
                    {
                        "name":"John",
                        "age":19,
                        "country":"Russia"
                    }
                ],
                "transferPreviousTeam":{
                    "logo":"https://static.hltv.org/images/team/logo/5752",
                    "name":"Cloud9",
                },
                "transferNewTeam":{
                    "logo":"",
                    "name":"",
                },
                "transfer":"out",
                "transferDateTime":"05-12-2020"
            }
        ];

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