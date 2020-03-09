/*
Copyright © 2020 Christian Chase Larcomb. christianlarcomb@gmail.com. All Rights Reserved

DEFINITIONS

	a. Licensor means the individual(s) or entity(ies) granting rights under this Copyright License.

CONFIDENTIAL
This document contains trade secrets or otherwise confidential information owned by the Licensor.
Access to and use of this information is strictly limited and controlled by the Licensor.
This document may not be copied, distributed, or otherwise disclosed outside of the Licensor's
facilities except under appropriate precautions to maintain the confidentiality hereof,
and may not be used in any way not expressly authorized by the Licensor.
 */

import React from 'react';
import './stylesheets/App.css';
import AppFeed from "./components/twitterFeed/app-feed.component";
import ContentHeader from "./components/headers/content-header";


class App extends React.Component {

    constructor(props)
    {

        super(props);

        this.CONNECTION_FLAG = "[REG: FE]";

        this.state =
            {
                twitterFeed:
                [

                ],

                twitterLeaderboard:
                [

                ],

                twitterSum: 3
            };

    }

    componentWillMount()
    {

        let url = 'ws://localhost:8080/';

        try
        {
            this.webSocket = new WebSocket(url);
        } catch (e) {
            console.debug("ERROR")
        }

    }

    componentDidMount()
    {

        this.webSocket.onopen = e =>
        {
            console.log("Incoming Message: " + e.data);
            this.webSocket.send(this.CONNECTION_FLAG)   // Sending Front-end Register Token
        };

        this.webSocket.onmessage = e =>
        {
            console.log("Object Received: " + e.data);
        }
    }//

    render(){
        return (

                <div className="app-division">

                    <AppFeed webSocket={this.webSocket} />

                    <div className="content-divider-container">

                        <div className="content-divider"/>

                    </div>

                    <div className="app-center-container">

                        <div className="app-center-wrapper">

                            <div className="dialogue-one">

                                <ContentHeader logoEnabled={false} hdrTitle="Event Sponsor"/>

                                <div className="dialogue-container">

                                    <div className="dialogue-wrapper">

                                    </div>

                                </div>

                            </div>

                            <div className="dialogue-two">

                                <ContentHeader logoEnabled={false} hdrTitle="Leaderboard"/>

                                <div className="dialogue-container">

                                    <div className="dialogue-wrapper">

                                    </div>

                                </div>

                            </div>

                            <div className="dialogue-thr">

                            </div>
                        </div>
                    </div>

                    <div className="app-progress">

                    </div>

                </div>

        );
    }

}

export default App;