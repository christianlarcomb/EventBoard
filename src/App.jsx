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
import './stylesheets/App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Begin from './components/primary/Login.component'
import EventBoard from './components/primary/EventBoard.component'

import socketIOClient from "socket.io-client";


class App extends React.Component {

    constructor(props){
        super(props);

        this.state =
            {
                response: false,
                endpoint: 'http://127.0.0.1:8080',

                tweets: [

                ]

            };
    }

    componentDidMount()
    {

        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);

        socket.on("Linked", data => {
            console.log("Data received: ", data)
        })

        socket.on("tweet", data => {

            try {
                this.text = data.text;
                this.name = data.user.name;
                this.screen_name = data.user.screen_name;
                this.verified = data.user.verified;
                this.profile_image_url = data.user.profile_image_url;
            } catch (e) {
                console.log('data missing')
            }


            this.setState(state => {
                return {
                    tweets: [
                        {
                            text: this.text,
                            user:
                                {
                                    name: this.name,
                                    screen_name: this.screen_name,
                                    verified: this.verified,
                                    profile_image_url: this.profile_image_url
                                }
                        },
                        state.tweets[0],
                        state.tweets[1],
                        state.tweets[2],
                        state.tweets[3]
                    ]}
            })

            //console.log(this.state.tweets)

        })

    }

    render(){

        return (
            <Router>
                <Route path="/" exact component={Begin}/>
                <Route path="/event"
                    render = {routeProps => (<EventBoard {...routeProps} tweetData={this.state.tweets}/>)}
                />
            </Router>
        )

    }

}

export default App;
