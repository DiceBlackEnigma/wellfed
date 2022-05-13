import classes from './ActivePlan.module.css';

import foodIntakeImage from './food_intake_img.svg';

export const ActivePlan = props => {
  return (
    <div className={`${classes.ActivePlanWrapper} d-flex`}>
      <div className={`${classes.foodIntakeWidget} background--yellow-tint w-100`}>
        <p className={`text--primary bold-font`}>Today's planned food intake</p>
        <span>calories</span>
        <div className={`d-flex justify-content-between`}>
            <div>
              <span className={`text--orange bold-font`}>1,450</span>
              <span className={`text--primary`}>kcal</span>
            </div>
            <img src={foodIntakeImage} alt="Woman feeding a dog"/>
        </div>
      </div>
    </div>
  );
};
