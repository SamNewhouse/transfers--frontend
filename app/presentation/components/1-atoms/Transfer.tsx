import React, { PureComponent } from 'react'
import { motion } from 'framer-motion';

interface Props {
    id: number,
    player: {
        name: string, 
        age: number,
        country: string
    }[],
    transferPreviousTeam: {
        logo: string,
        name: string
    },
    transferNewTeam: {
        logo: string,
        name: string
    },
    transfer: string,
    transferDateTime: string,
}

export default class extends PureComponent<Props> {

    public render(): JSX.Element {

        const { id, player, transferPreviousTeam, transferNewTeam, transfer, transferDateTime } = this.props;

        const item = {
            whileHover: { scale: 1.1 },
            hidden: { opacity:0.5, scale: 0 },
            show: { opacity: 1, scale: 1 }
        }

        if(transfer !== "move"){
            var transferIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
                <g transform="matrix(10,0,0,10,0,0)">
                    <path d="M3.854.5,10,6.646a.5.5,0,0,1,0,.708L3.854,13.5" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
            </svg>
        } else {
            var transferIcon = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
            <g transform="matrix(10,0,0,10,0,0)">
                <path d="M6.457.5,12.6,6.646a.5.5,0,0,1,0,.708L6.457,13.5" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
                <path d="M1.25.5,7.4,6.646a.5.5,0,0,1,0,.708L1.25,13.5" fill="none" stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
        </svg>
        }

        return (
            <motion.div className="transfer" key={id.toString()} id={id.toString()} data-transfer-date={transferDateTime} variants={item} whileHover="hover">
                <div className="row players">
                    {player.map((player, index) =>
                        <div className="player" key={index} id={index.toString()}>
                            <div className="name-age">
                                <h3>{player.name}</h3>
                                <span>{player.age}</span>
                            </div>
                            <h4>{player.country}</h4>
                        </div>
                    )}
                </div>
                <div className="row in-out">
                    <div className="previous-team">
                        <img title={transferPreviousTeam.name} src={transferPreviousTeam.logo} />
                    </div>
                    <div className={transfer}>{transferIcon}</div>
                    <div className="new-team">
                        <img title={transferNewTeam.name} src={transferNewTeam.logo} />
                    </div>
                </div>
                <div className="background left" style={{ backgroundImage: `url(${transferPreviousTeam.logo})` }}></div>
                <div className="background right" style={{ backgroundImage: `url(${transferNewTeam.logo})` }}></div>
            </motion.div>
        );

    }

}