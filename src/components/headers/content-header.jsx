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


class ContentHeader extends React.Component {

    render() {
        return(

            <div className="feed-title container">

            <div className={`feed-title grid ${this.props.logoEnabled ? 'logo-grid-top' : 'text-grid-top'}`}>

                {
                    this.props.logoEnabled ?

                        <>

                            <div className="feed-grid-col one">

                                <div className="vector-wrapper">

                                    <svg fill="#3b3b3b" xmlns="http://www.w3.org/2000/svg" id="Logo_FIXED" data-name="Logo — FIXED" viewBox="0 0 400 400">

                                        <path className="cls-2" d="M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23"/>

                                    </svg>

                                </div>

                            </div>
                        </>
                        : <></>
                }

                <div className="feed-grid-col two">

                    <h1 className="feed-text">
                        {this.props.hdrTitle}
                    </h1>

                </div>

            </div>

            </div>
        )
    }

}

export default ContentHeader