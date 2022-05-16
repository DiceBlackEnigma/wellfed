import {useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';

import {MotionDiv} from '../../shared/MotionDiv/MotionDiv';

import {ProgressBar} from '../ProgressBar/ProgressBar';
import {Plans} from '../Plans/Plans';
import {LogFood} from '../LogFood/LogFood';
import {ActivePlan} from '../Plans/ActivePlan/ActivePlan';

import classes from './Dashboard.module.css';
import husky from './husky.svg';
import scale from './scale.svg';
import bowl from './bowl.svg';
import bcs from './body-conditon.svg';
import runningDog from './exercise.svg';
import alertIcon from './alert-icon.svg';
import {CaloriesChart} from '../CaloriesChart/CaloriesChart';
import {CALORIES} from '../../constants';

export const Dashboard = props => {
  const [progressState, setProgressLoadState] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [fadeOut, setFadeOut] = useState(false);
  const [calories, setCalories] = useState(CALORIES);

  const [numOfWeeks, setNumOfWeeks] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [averageCalories, setAverageCalories] = useState(0);
  const [removeAlert, setRemoveAlert] = useState(false);

  const activePlan = !!searchParams.get('p');

  const alertClickHandler = event => {
    setFadeOut(true);
    setTimeout(() => setRemoveAlert(true), 500);
  };
  useEffect(() => {
    setTimeout(() => {
      setProgressLoadState(true);
    }, 200);
  }, []);

  const logWeeklyFood = weeklyCalories => {
    setCalories(prevCalories => {
      const [x] = prevCalories[prevCalories.length - 1];
      const newWeek = [x + 1, weeklyCalories];
      return [...prevCalories, newWeek];
    });
    setNumOfWeeks(prevWeekNo => ++prevWeekNo);
  };

  useEffect(() => {
    const totalKcal = calories.reduce((acc, [_, item]) => acc + item, 0);
    setTotalCalories(totalKcal);

    console.log(totalKcal);
    console.log(calories);

    setAverageCalories(totalKcal / (calories.length - 1));
  }, [calories]);


  return (
    <MotionDiv>
      <div className={`${classes.DashboardWrapper}`}>
        <div className="row">
          <div className="col-md-3 d-none d-md-flex">
            Side menu goes here
          </div>
          <div className="col-12 col-md-9">
            <div className="petInfoSection">
              <div className="row d-flex">
                <div className="col-12 col-md-4 order-md-2">
                  <div className={`d-flex flex-column align-items-center`}>
                    <div style={{
                      position: 'relative',
                      background: `url(${husky}) no-repeat center center`,
                      'background-size': '50%'
                    }}>
                      {/*<img src={husky} alt="dog profile img" />*/}
                      <ProgressBar progressState={progressState} widthFromCenter={'60'} stroke={'6'} height={'120'}
                                   image={husky}
                                   color={'#034D91'}/>
                    </div>
                    <p className={`text--primary bold-font font-size-2`}>Bruno</p>
                    <p className={`d-none d-md-block text--primary`}>German Shepherd</p>
                  </div>
                </div>

                <div className="col-md-4 d-none d-md-block">
                  Calories goes here
                </div>

                <div className="col-12 col-md-4">
                  <div className={`row`}>
                    <div className={`col-5 offset-1`}>
                      <div className={`${classes.infoPill} ${classes.infoPill__light}`}>
                        <div className={`${classes.headerSection}`}>
                          <img src={scale} alt="Scale"/>
                        </div>
                        <div className={`${classes.pillContentSection}`}>
                          <span className={`text--light`}>Weight</span>
                          <span className={`text--primary ${classes.contentText}`}>5.4kg</span>
                        </div>
                      </div>
                    </div>
                    <div className={`col-5`}>
                      <div className={`${classes.infoPill} ${classes.infoPill__dark}`}>
                        <div>
                          <span className={`text--light`}>Plan</span>
                          <span className={`${classes.contentText} text--white`}>Super</span>
                        </div>
                        <div className={`${classes.pillContentSection}`}>
                          <img src={bowl} alt="Scale"/>
                        </div>
                      </div>
                    </div>
                    <div className={`col-5 offset-1`}>
                      <div className={`${classes.infoPill} ${classes.infoPill__light}`}>
                        <div className={`${classes.headerSection}`}>
                          <img src={bcs} alt="Scale"/>
                        </div>
                        <div className={`${classes.pillContentSection}`}>
                          <span className={`text--light`}>Condition</span>
                          <span className={`text--primary ${classes.contentText}`}>Ideal</span>
                        </div>
                      </div>
                    </div>
                    <div className={`col-5`}>
                      <div className={`${classes.infoPill} ${classes.infoPill__dark}`}>
                        <div>
                          <span className={`text--light`}>Exercise</span>
                          <span className={`${classes.contentText} text--white`}>25km</span>
                        </div>
                        <div className={`${classes.pillContentSection}`}>
                          <img src={runningDog} alt="Scale"/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {!removeAlert && <div className={`col-12`}>
                  <div onClick={alertClickHandler}
                       className={`${classes.alert} d-flex ${fadeOut ? 'animate__animated animate__slideOutLeft' : ''}`}>
                    <img src={alertIcon} alt="Woman holding a dog" className={`align-self-end`}/>
                    <span className={`text--yellow-tint`}>
                  Improve analysis of Bruno's weight and physical state by selecting a Body Condition Score
                  </span>
                  </div>
                </div>}

              </div>
            </div>

            {!activePlan && <Plans/>}
            {activePlan && <ActivePlan/>}
            <LogFood logWeeklyFood={logWeeklyFood}/>
            {!!numOfWeeks && <CaloriesChart calories={calories}
                                            weeks={numOfWeeks}
                                            avgCalories={averageCalories}
                                            totalCalories={totalCalories}/>}
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};
