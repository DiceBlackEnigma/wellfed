import {useEffect, useState} from 'react';
import {InputCard} from '../../../shared/InputCard/InputCard';

import classes from './EditPlan.module.css';

import Duration from './Duration_Plan.svg';
import {NUTRITION_PLANS, PLAN_IMAGES} from '../../../constants';

export const EditPlan = props => {
  const plans = NUTRITION_PLANS;
  const [plan, setPlan] = useState(null);

  useEffect(() => {
      const plan = plans.find(plan => plan.id === 1);
      setPlan(plan);
    },
    [plans]
  );

  return (
    <div className={`row`}>
      <div className={`col-12`}>
        <div className={classes.EditPlanWrapper}>
          {plan && <div className={`d-flex justify-content-center align-items-center flex-column`}>
            <img src={plan.image} alt={plan.altText} className={`profile-border`}/>
            <h3 className={`primary-text bold-font`}>{plan.name}</h3>
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
          <button type={`button`} className={`btn w-100 primary-btn`}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
