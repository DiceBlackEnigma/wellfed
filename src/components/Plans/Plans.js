import classes from './Plans.module.css';

import planOneImage from './plan-1-img.png';

export const Plans = props => {
  return (
    <div className={`${classes.PlanSection}`}>
      <h4 className={`primary-text ml-1`}>Plan</h4>
      <div className={`d-flex ${classes.PlanScrollableSection}`}>
        <div className={`${classes.planOne} ${classes.PlanCard}`}>
          <div>
            <img src={planOneImage} alt="Image of pup"/>
          </div>
          <div className={`${classes.ButtonWrapper}`}>
            <button className={`btn default-btn`}>Customise</button>
            <button className={`btn secondary-btn`}>Select</button>
          </div>
        </div>

        <div className={`${classes.planTwo} ${classes.PlanCard}`}>
          <div>
            Plan 2
          </div>
          <div className={`${classes.ButtonWrapper}`}>
            <button className={`btn default-btn`}>Customise</button>
            <button className={`btn primary-btn`}>Select</button>
          </div>
        </div>

        <div className={`${classes.planThree} ${classes.PlanCard}`}>
          <div>
            Plan 3
          </div>
          <div className={`${classes.ButtonWrapper}`}>
            <button className={`btn default-btn`}>Customise</button>
            <button className={`btn secondary-btn`}>Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};
