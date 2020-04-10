import React from 'react';
import "../../stylesheets/config-menu/config-steps.css"

class ConfigurationMenu extends React.Component
{

    constructor(props)
    {
        super(props);

        this.state =
            {
                step_one_completed: false
            }

    }

    stepOneRender = () =>
    {
        /* If Step 1 is not completed yet... */
        if(!this.state.step_one_completed)
        {
            return(
                <div className="sel-menu-cont top">
                    <span className="txt-32px txt-bld">step 1</span>
                    <button className="config-menu-button txt-18px">configure</button>
                </div>
            )

        } else {

            return(
                <div className="sel-menu-cont top">
                    <span className="txt-32px txt-bld txt-clr-success">step 1</span>

                    <button className="config-menu-button-success">
                        <svg className="checkmark-sml" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 515.556 515.556">
                            <path fill="white" d="m0 274.226 176.549 176.886 339.007-338.672-48.67-47.997-290.337 290-128.553-128.552z"/>
                        </svg>
                    </button>

                </div>
            )
        }
    };

    /* Renders the enabled or disabled drag and drop config-menu */
    stepTwoRender = () =>
    {

        /* If Step 1 is not completed yet... */
      if(!this.state.step_one_completed)
      {

          return(
              <div className="sel-menu-cont bot">
                  <span className="txt-32px txt-bld txt-clr-disabled">step 2</span>

                  <div className="content-item-container">

                      <div className="content-item-drag-grid">

                          <div className="content-item-emblem bknrd-disabled"/>
                          <div className="content-item-emblem bknrd-disabled"/>
                          <div className="content-item-emblem bknrd-disabled"/>
                          <div className="content-item-emblem bknrd-disabled"/>
                          <div className="content-item-emblem bknrd-disabled"/>
                          <div className="content-item-emblem bknrd-disabled"/>

                      </div>

                  </div>

              </div>
          )

      } else {

          return(
              <div className="sel-menu-cont bot">
                  <span className="txt-32px txt-bld">step 2</span>

                  <div className="content-item-container">

                      <div className="content-item-drag-grid">

                          <div className="content-item-emblem"/>
                          <div className="content-item-emblem"/>
                          <div className="content-item-emblem"/>
                          <div className="content-item-emblem"/>
                          <div className="content-item-emblem"/>
                          <div className="content-item-emblem"/>

                      </div>

                  </div>

              </div>
          )
      }
    };


    render()
    {
        return(
            <div className="sel-menu-wrapper">

                { this.stepOneRender() }

                <br/>

                { this.stepTwoRender() }

            </div>
        )
    }


}

export default ConfigurationMenu;