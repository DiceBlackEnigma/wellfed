import {useEffect, useState} from 'react';

import {ProgressBar} from '../ProgressBar/ProgressBar';
import {Plans} from '../Plans/Plans';

import classes from './Dashboard.module.css';
import husky from './husky.svg';

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
                <p className={`primary-text`}>Bruno</p>
                <p className={`d-none d-md-block primary-text`}>German Shepherd</p>
              </div>
            </div>
            <div className="col-md-4 d-none d-md-block">
              Calories goes here
            </div>
            <div className="col-12 col-md-4">
              <p>Pet Details</p>
            </div>

          </div>
        </div>

        <Plans />
      </div>
    </div>

  );
};
