import React, { PureComponent } from 'react';
import data from 'data/data.json'
import Transfer from 'presentation/components/1-atoms/Transfer'
import { motion } from 'framer-motion';

interface Props {
    //
}

export default class extends PureComponent<Props> {

    public render() {

        const list = {
            hidden: { 
                opacity: 0.5,
                scale: 1.5 
            },
            show: {
                opacity: 1,
                scale: 1,
                transition: {
                    staggerChildren: 0.4
                }
            }
        }

        return (
            <motion.div className="inner" variants={list} initial="hidden" animate="show" >
                {data.map((transfer) =>
                    <Transfer
                        id={transfer.id}
                        player={transfer.player}
                        transferPreviousTeam={transfer.transferPreviousTeam}
                        transferNewTeam={transfer.transferNewTeam}
                        transfer={transfer.transfer}
                        transferDateTime={transfer.transferDateTime}
                    />
                )}
            </motion.div>
        );

    }

}