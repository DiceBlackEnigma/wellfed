import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import {InputCard} from '../../../shared/InputCard/InputCard';

import classes from './EditPlan.module.css';

import {NUTRITION_PLANS, PLAN_IMAGES} from '../../../constants';
import {MotionDiv} from '../../../shared/MotionDiv/MotionDiv';

export const EditPlan = props => {
  const plans = NUTRITION_PLANS;
  const [plan, setPlan] = useState(null);
  const params = useParams();

  useEffect(() => {
      const plan = plans.find(plan => plan.id === +params.planId);
      setPlan(plan);
    },
    [plans, params]
  );

  return (
    <div className={`row`}>
      <MotionDiv>
        <div className={`col-12`}>
          <div className={classes.EditPlanWrapper}>
            {plan && <div className={`d-flex justify-content-center align-items-center flex-column`}>
              <img src={plan.image} alt={plan.altText} className={`profile-image`}/>
              <h3 className={`text--primary bold-font`}>{plan.name}</h3>
            </div>}
            {
              plan && plan.fields.map((planField, index) => {
                return <InputCard
                  key={index}
                  title={planField.title}
                  value={planField.value}
                  img={PLAN_IMAGES[planField.title]}
                />;
              })
            }
            <Link to="/dashboard?p=1" type={`button`} className={`btn w-100 primary-btn`}>
              Continue
            </Link>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};
