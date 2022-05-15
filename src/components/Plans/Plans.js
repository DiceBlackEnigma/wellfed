import classes from './Plans.module.css';

import planOneImage from './plan-1-img.png';
import {Link} from 'react-router-dom';

export const Plans = props => {
  return (
    <div className={`${classes.PlanSection}`}>
      <h4 className={`text--primary ml-1`}>Plan</h4>
      <div className={`d-flex ${classes.PlanScrollableSection}`}>
        <div className={`${classes.planOne} ${classes.PlanCard}`}>
          <div className={`d-flex`}>
            <div>
              <img src={planOneImage} alt="pup"/>
              <p className={`text--yellow-tint mt-3`} style={{'font-size': '1.5rem'}}>Super Pup Plan</p>
              <p className={`text--yellow-tint`}>
                For the lil pup who wants to grow up big and strong
              </p>
            </div>
            <div className={`d-flex flex-column justify-content-around`}
                 style={{'flex-basis': '60%', 'border-left': '1px solid #FFEFD5', 'padding-left': '1rem'}}>
              <div>
                <span className={`text--yellow-tint d-block`}>Duration</span>
                <span className={`text--powder-blue`}>6 months</span>
              </div>

              <div>
                <span className={`text--yellow-tint d-block`}>Calories per day</span>
                <span className={`text--powder-blue`}>2, 000kcal</span>
              </div>

              <div>
                <span className={`text--yellow-tint d-block`}>Target Condition</span>
                <span className={`text--powder-blue`}>Ideal</span>
              </div>
            </div>
          </div>
          <div className={`${classes.ButtonWrapper}`}>
            <Link to="/plans/1" className={`btn default-btn`}>Customise</Link>
            <button className={`btn secondary-btn`}>Select</button>
          </div>
        </div>

        <div className={`${classes.planTwo} ${classes.PlanCard}`}>
          <div>
            Plan 2
          </div>
          <div className={`${classes.ButtonWrapper}`}>
            <Link to="/plans/2" className={`btn default-btn`}>Customise</Link>
            <button className={`btn primary-btn`}>Select</button>
          </div>
        </div>

        <div className={`${classes.planThree} ${classes.PlanCard}`}>
          <div>
            Plan 3
          </div>
          <div className={`${classes.ButtonWrapper}`}>
            <Link to="/plans/3" className={`btn default-btn`}>Customise</Link>
            <button className={`btn secondary-btn`}>Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};
