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
import '../../../stylesheets/main/App.css';
import AppFeed from "../../stream-display/twitterFeed/app-feed.component";
import ContentHeader from "../../../components/stream-display/headers/content-header";

class EventBoard extends React.Component {

    constructor(props)
    {

        super(props);

        this.state =
            {

                twitterSum: 3,

            };

    }


    render(){
        return (

            <div className="app-division">

                <AppFeed tweetData={this.props.tweetData} />

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

export default EventBoard;
