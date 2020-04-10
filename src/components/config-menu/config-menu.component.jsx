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
import '../../stylesheets/config-menu/config-menu.css';
import '../../stylesheets/libraries/EventBoard-Library.css';
import ConfigurationMenu from "./config-steps.component";

class Login extends React.Component {

    constructor(props)
    {

        super(props);

        this.state =
            {
                menu_options:
                    [
                        {
                            title: "github",
                            description: "latest repo is now available!",
                            route_link: "/"
                        },
                        {
                            title: "social",
                            description: "keep up to date on progress!",
                            route_link: "/"
                        },
                        {
                            title: "need help?",
                            description: "nice little wiki to help out!",
                            route_link: "/"
                        }
                    ]
            };

    }


    render(){
        return (

            <div className="app-split-container">

                {/* App Split 1 */}
                <div className="app-split one">

                    <div className="menu-container">

                        <div className="menu-top">

                            <div className="menu-txt-wrapper grid-row-50-50">
                                <div className="menu-txt-content content-float">
                                    <span className="txt-50px txt-clr-blk txt-bld">eventboard</span>
                                </div>
                                <div className="menu-txt-content txt-float">
                                    <span className="txt-12px txt-clr-blk txt-bld">made by</span>
                                    <br/>
                                    <span className="txt-12px txt-clr-blk txt-bld">Christian Larcomb</span>
                                </div>
                            </div>
                        </div>


                        <div className="menu-bottom">

                            { /* Adding all buttons available to navigate the site */ }

                            {
                                this.state.menu_options.map(data => (
                                    <div className="menu-button-container">


                                        <div className="menu-button-wrapper">

                                            <div className="menu-button-divider grid-col-2-98">

                                                <div className="menu-colored bknrd-blk"/>

                                                <div className="menu-button-sel grid-row-65-35">

                                                    <span className="menu-button-sel-title txt-32px txt-bld">
                                                        {data.title}
                                                    </span>
                                                    <span className="menu-button-sel-desc txt-12px txt-bld">
                                                        {data.description}
                                                    </span>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                ))
                            }

                        </div>

                    </div>

                </div>

                {/* App Split 2 */}
                <div className="app-split two">
                    <div className="config-slot-grid">

                        <br/>

                        <div className="config-slot-container">

                            <div className="config-slot-wrapper">

                                <div className="config-simulator-grid">

                                    <div className="config-simulator-obj col-one">

                                    </div>

                                    <div className="config-simulator-obj col-two">

                                        <div className="config-simulator-obj two">

                                        </div>
                                        <div className="config-simulator-obj three">

                                        </div>
                                        <div className="config-simulator-obj four">

                                        </div>

                                    </div>

                                    <div className="config-simulator-obj col-three">

                                        <div className="config-simulator-obj five">

                                        </div>
                                        <div className="config-simulator-obj six">

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                        <br/>

                    </div>
                </div>

                {/* App Split 3 */}
                <div className="app-split three">

                    <div className="sel-menu-container">

                        <ConfigurationMenu/>

                    </div>

                </div>

            </div>

        );
    }

}

export default Login;
