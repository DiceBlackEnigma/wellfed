import classes from './Plans.module.css';

import planOneImage from './plan-1-img.png';
import planTwoImage from './plan-2-img.svg';

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
          <div className={`row`}>
            <div className={`col-12`}>
              <div className={`d-flex justify-content-between align-items-start`} style={{'margin-bottom': '.5rem'}}>
                <div>
                <p className={`text--primary bold-font`} style={{'margom-bottom': 0, 'font-size': '1.25rem'}}>Get Back In Shape Plan</p>
                  <p style={{'margin-bottom': 0}} className={`text--primary`}>So you let your dog go. No worries, we can help your dog get
                    back its confidence and summer bud!
                  </p>
                </div>
                  <img src={planTwoImage} alt={'obese pup'} />
              </div>

            </div>
          </div>
          <div className={`row`}>
            <div className={`col-4 d-flex flex-column ${classes.infoSection}`}>
              <span className={`text--primary`}>Duration</span>
              <span className={`text--primary`}>6 months</span>
            </div>
            <div className={`col-4 d-flex flex-column ${classes.infoSection}`}>
              <span className={`text--primary`}>Calories</span>
              <span className={`text--primary`}>1,250kcal</span>
            </div>
            <div className={`col-4 d-flex flex-column ${classes.infoSection}`}>
              <span className={`text--primary`}>Pet Age</span>
              <span className={`text--primary`}>Adult</span>
            </div>
            <div className={`col-4 d-flex flex-column ${classes.infoSection}`}>
              <span className={`text--primary`}>Condition</span>
              <span className={`text--primary`}>Obese</span>
            </div>
            <div className={`col-4 d-flex flex-column ${classes.infoSection}`}>
              <span className={`text--primary`}>Target</span>
              <span className={`text--primary`}>Ideal</span>
            </div>
            <div className={`col-4 d-flex flex-column ${classes.infoSection}`}>
              <span className={`text--primary`}>Exercise</span>
              <span className={`text--primary`}>20km</span>
            </div>

          </div>
          <div className={`${classes.ButtonWrapper}`}>
            <Link to="/plans/2" className={`btn default-btn`}>Customise</Link>
            <button className={`btn primary-btn`}>Select</button>
          </div>
        </div>

        <div className={`${classes.planThree} ${classes.PlanCard}`}>
          <div className={`row`}>
            <div className={`col-12`}>
              <div className={`d-flex justify-content-between align-items-start`} style={{'margin-bottom': '.5rem'}}>
                <div className={`text-center`}>
                  <p className={`text--primary bold-font`} style={{'margom-bottom': 0, 'font-size': '1.25rem'}}>
                    Active Runner Plan
                  </p>
                  <p style={{'margin-bottom': 0}} className={`text--primary`}>
                    For the dogs with way too much energy, make sure they eat enough for the calories they burn
                  </p>
                </div>
              </div>

            </div>
          </div>
          <div className={`row`}>
            <div className={`col-4 d-flex flex-column ${classes.infoSection}`}>
              <span className={`text--primary`}>Duration</span>
              <span className={`text--primary`}>4 weeks</span>
            </div>
            <div className={`col-4 d-flex flex-column ${classes.infoSection}`}>
              <span className={`text--primary`}>Calories</span>
              <span className={`text--primary`}>1,500kcal</span>
            </div>
            <div className={`col-4 d-flex flex-column ${classes.infoSection}`}>
              <span className={`text--primary`}>Pet Age</span>
              <span className={`text--primary`}>Adult</span>
            </div>
            <div className={`col-4 d-flex flex-column ${classes.infoSection}`}>
              <span className={`text--primary`}>Condition</span>
              <span className={`text--primary`}>Obese</span>
            </div>
            <div className={`col-4 d-flex flex-column ${classes.infoSection}`}>
              <span className={`text--primary`}>Target</span>
              <span className={`text--primary`}>Ideal</span>
            </div>
            <div className={`col-4 d-flex flex-column ${classes.infoSection}`}>
              <span className={`text--primary`}>Exercise</span>
              <span className={`text--primary`}>50km</span>
            </div>

          </div>
          <div className={`${classes.ButtonWrapper}`}>
            <Link to="/plans/2" className={`btn secondary-btn`}>Customise</Link>
            <button className={`btn primary-btn`}>Select</button>
          </div>
        </div>
      </div>
    </div>
  );
};
