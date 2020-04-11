import React from 'react';
import "../../stylesheets/config-menu/config-steps.css"
import "../../stylesheets/config-menu/config-overlay.css"

class ConfigurationMenu extends React.Component
{

    constructor(props)
    {
        super(props);

        this.overlayRef = React.createRef();

        this.state =
            {
                step_one_completed: false,
                config_overlay_opened: false,
                anim_triggered: false
            }

    }

    stepOneRender = () =>
    {
        /* If Step 1 is not completed yet... */
        if(!this.state.step_one_completed)
        {
            /* Configure Button */
            return(
                <div className="sel-menu-cont top">
                    <span className="txt-32px txt-bld">step 1</span>

                    <button className="config-menu-button txt-18px" onClick={this.handleOpening}>
                        configure
                    </button>

                </div>
            )

        } else {
            /* Successfully Completed Button! */
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

    handleOpening = () =>
    {

        let currentClassNameArray = this.overlayRef.current.className.split(" ");

        this.overlayRef.current.className = currentClassNameArray[0] + " view-enabled";
        setTimeout(() => {
            this.overlayRef.current.className = this.overlayRef.current.className.toString() + " view-enabled-anim"
        }, 10)

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
            <>

                <div ref={this.overlayRef} className="config-overlay-container view-disabled">

                </div>


                <div className="sel-menu-wrapper">

                    { this.stepOneRender() }

                    <br/>

                    { this.stepTwoRender() }

                </div>
            </>
        )
    }


}

export default ConfigurationMenu;