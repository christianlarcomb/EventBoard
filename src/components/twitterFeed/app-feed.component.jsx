/*
Copyright (c) 2020 Christian C. Larcomb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, and distribute copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

Under no circumstances shall the Software be sublicensed, sold, and/or used for commerical purposes.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
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
