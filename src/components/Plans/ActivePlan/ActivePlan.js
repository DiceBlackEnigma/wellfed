import {useState} from 'react';

import classes from './ActivePlan.module.css';

export const ActivePlan = props => {
  const [activeDailyClass, setActiveDailyClass] = useState(true);

  const toggleActiveDailyClassClickHandler = () => {
    setActiveDailyClass(prevClass => prevClass = !prevClass);
  };

  return (
    <div className={`${classes.ActivePlanWrapper} d-flex`}>
      <div className={`${classes.foodIntakeWidget} background--yellow-tint w-100`}>
        <p className={`text--primary bold-font`}>Today's planned food intake</p>
        <span onClick={toggleActiveDailyClassClickHandler} className={`text--primary`}>
          {activeDailyClass ? 'Calories' : 'Cups'}
        </span>
        <div>
          <div style={{overflow: 'hidden', position: 'relative', height: '3.5rem'}}>
            <div className={`${classes.calorieDailyPlan} ${activeDailyClass ? classes.active : ''}`}>
              <span style={{'font-size': '2.5rem'}} className={`text--orange bold-font`}>1,450</span>
              <span className={`text--primary`}>kcal</span>
            </div>

            <div className={`${classes.cupDailyPlan} ${!activeDailyClass ? classes.active : ''}`}>
              <div className={`d-flex`}>
                <div className={`me-1`}>
                  <span style={{'font-size': '2.5rem'}} className={`text--orange bold-font`}>3</span>
                  <span className={`text--primary`}>cups</span>
                </div>
                <div>
                  <span style={{'font-size': '2.5rem'}} className={`text--orange bold-font`}>5</span>
                  <span className={`text--primary`}>treats</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
