import {useEffect, useState} from 'react';

import {ProgressBar} from '../ProgressBar/ProgressBar';
import {Plans} from '../Plans/Plans';
import {LogFood} from '../LogFood/LogFood';

import classes from './Dashboard.module.css';
import husky from './husky.svg';
import scale from './scale.svg';
import bowl from './bowl.svg';
import bcs from './body-conditon.svg';
import runningDog from './exercise.svg';
import alertIcon from './alert-icon.svg'

export const Dashboard = props => {
  const [progressState, setProgressLoadState] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setProgressLoadState(true);
    }, 200);
  }, []);

  return (
    <div className="row">
      <div className="col-md-3 d-none d-md-flex">
        Side menu goes here
      </div>
      <div className="col-12 col-md-9">
        <div className="petInfoSection">
          <div className="row d-flex">
            <div className="col-12 col-md-4 order-md-2">
              <div className={`d-flex flex-column align-items-center`}>
                <div style={{position: 'relative'}}>
                  {/*<img src={husky} alt="dog profile img" />*/}
                  <ProgressBar progressState={progressState} widthFromCenter={'60'} stroke={'3'} height={'120'} image={husky}
                               color={'#034D91'}/>
                </div>
                <p className={`primary-text bold-font font-size-2`}>Bruno</p>
                <p className={`d-none d-md-block primary-text`}>German Shepherd</p>
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
                      <img src={scale}  alt="Scale" />
                    </div>
                    <div className={`${classes.pillContentSection}`}>
                      <span className={`light-text`}>Weight</span>
                      <span className={`primary-text ${classes.contentText}`}>5.4kg</span>
                    </div>
                  </div>
                </div>
                <div className={`col-5`}>
                  <div className={`${classes.infoPill} ${classes.infoPill__dark}`}>
                    <div>
                      <span className={`light-text`}>Plan</span>
                      <span className={`${classes.contentText} white-text`}>Super</span>
                    </div>
                    <div className={`${classes.pillContentSection}`}>
                      <img src={bowl}  alt="Scale" />
                    </div>
                  </div>
                </div>
                <div className={`col-5 offset-1`}>
                  <div className={`${classes.infoPill} ${classes.infoPill__light}`}>
                    <div className={`${classes.headerSection}`}>
                      <img src={bcs}  alt="Scale" />
                    </div>
                    <div className={`${classes.pillContentSection}`}>
                      <span className={`light-text`}>Condition</span>
                      <span className={`primary-text ${classes.contentText}`}>Ideal</span>
                    </div>
                  </div>
                </div>
                <div className={`col-5`}>
                  <div className={`${classes.infoPill} ${classes.infoPill__dark}`}>
                    <div>
                      <span className={`light-text`}>Exercise</span>
                      <span className={`${classes.contentText} white-text`}>25km</span>
                    </div>
                    <div className={`${classes.pillContentSection}`}>
                      <img src={runningDog}  alt="Scale" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`col-12`}>
              <div className={`${classes.alert} d-flex`}>
                <img src={alertIcon} alt="Woman holding a dog" className={`align-self-end`}/>
                <span className={`yellow-tint-text`}>
                  Improve analysis of Bruno's weight and physical state by selecting a Body Condition Score
                </span>
              </div>
            </div>

          </div>
        </div>

        <Plans />
        <LogFood />
      </div>
    </div>

  );
};
