import React, { Component } from 'react';
import Transfers from 'presentation/components/2-molecules/Transfers';

import 'foundation/app.scss'


class App extends Component {
    
    render() {

        return (
            <div className="container">
                <Transfers/>
            </div>
        );

      }
      
}

export default App;