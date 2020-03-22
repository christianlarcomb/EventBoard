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
                endpoint: 'http://127.0.0.1:8080'
            };
    }

    componentDidMount()
    {

        const { endpoint } = this.state;
        const socket = socketIOClient(endpoint);
        socket.on("Linked", data => {
            console.log("Data received: ", data)
        })

    }

    render(){

        return (
            <Router>
                <Route path="/" exact component={Begin}/>
                <Route path="/event" exact component={EventBoard}/>
            </Router>
        )

    }

}

export default App;
