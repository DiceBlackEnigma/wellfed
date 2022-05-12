import classes from './Plans.module.css';

import planOneImage from './plan-1-img.png';

export const Plans = props => {
  return (
    <div className={`${classes.PlanSection}`}>
      <h4 className={`primary-text ml-1`}>Plan</h4>
      <div className={`d-flex ${classes.PlanScrollableSection}`}>
        <div className={`plan-1 ${classes.PlanCard}`}
             style={{'background-color': 'red'}}>
          <div>
            <img src={planOneImage} alt="Image of pup"/>
          </div>
          <div className={`${classes.ButtonWrapper}`}>
            <button className={`btn default-btn`}>Customise</button>
            <button className={`btn secondary-btn`}>Select</button>
          </div>
        </div>

        <div className={`plan-1 ${classes.PlanCard}`}
             style={{'background-color': 'goldenrod'}}>
          Plan 1
        </div>

        <div className={`plan-1 ${classes.PlanCard}`}
             style={{'background-color': 'aqua'}}>
          Plan 1
        </div>
      </div>
    </div>
  );
};
