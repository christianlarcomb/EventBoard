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
import '../../stylesheets/AppFeed.css';
import '../../stylesheets/fonts.css'
import FeedContent from "./feed-content.component";
import ContentHeader from "../headers/content-header";

class AppFeed extends React.Component {

    constructor(props)
    {
        super(props);

        this.state = {
            tweets: [
                {
                    display: "Ricky Appleseed",
                    picURL: "https://...",
                    username:"@RickyAppleseed",
                    content: "I'm at the #RCBCsteam event and loving it!"
                },
                {
                    display: "Mick Appleseed",
                    picURL: "https://...",
                    username:"@MickAppleseed",
                    content: "Wow! Everyone is incredibly nice here at the #RCBCsteam event!!"
                },
                {
                    display: "Jule Appleseed",
                    picURL: "https://...",
                    username:"@JuleAppleseed",
                    content: "#RCBCsteam lets go class 2055!"
                },
                {
                    display: "Jacky Appleseed",
                    picURL: "https://...",
                    username:"@JackyAppleseed",
                    content: "Hey, #RCBCsteam! I helped make you!"
                }
            ]
        };
    }

    sendAPIMessage = () => {

        try {

            this.props.webSocket.send('This is firing backend!')

        } catch (e) {
            // do nothing
        }

    };

    render(){
        return (

            <div className="app-feed">

                <ContentHeader logoEnabled={true} hdrTitle="Feed" onClick={this.sendAPIMessage}/>

                <div className="feed-content">

                    {
                        this.state.tweets.map(obj => (
                            <FeedContent objData={obj}/>
                        ))
                    }

                </div>

            </div>

        );
    }

}

export default AppFeed;
