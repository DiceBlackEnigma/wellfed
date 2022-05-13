import {useState} from 'react';

import classes from './LogFood.module.css';

export const LogFood = props => {
  let [toggleState, setToggleState] = useState(true);

  const toggleStateClickHandler = e => {
    setToggleState( prevToggleState => toggleState = !prevToggleState );
  }
  return (
    <div className={`${classes.LogFoodWrapper}`}>
      <h4 className={`text--primary mb-17`}>Food Log</h4>

      <div className={`accordion ${classes.widgetHeader}`} id="accordionExample">
        <div className={`accordion-item`}>
          <h2 className="accordion-header" id="headingOne">
            <button className={`accordion-button alert-widget-danger widget-with-image-text ${toggleState ? 'collapsed' : ''}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                    aria-expanded={`${toggleState ? 'false' : 'true'}`} aria-controls="collapseOne" onClick={toggleStateClickHandler}>
              Log Bruno's food for last week
            </button>
          </h2>
          <div id="collapseOne" className={`accordion-collapse ${toggleState ? 'collapse' : 'show'}`} aria-labelledby="headingOne"
               data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
              plugin adds the appropriate classes that we use to style each element. These classes control the overall
              appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom
              CSS or overriding our default variables. It's also worth noting that just about any HTML can go within
              the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
