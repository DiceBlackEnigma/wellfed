import DurationPlanImg from './components/Plans/EditPlan/Duration_Plan.svg';
import ExercisePlanImg from './components/Plans/EditPlan/Exercise_Plan.svg';
import CaloriesPlanImg from './components/Plans/EditPlan/Nutrition_Plan.svg';
import WeightPlanImg from './components/Plans/EditPlan/Weight_Plan.svg';
import TargetConditionPlanImg from './components/Plans/EditPlan/Target_Condition_Plan.svg';

import SuperPupPlanImage from './components/Plans/plan-1-img.png';
import BackInShapePlanImage from './components/Plans/plan-2-img.svg';
import ActiveRunnerPlanImage from './components/Plans/plan-3-img.jpg';

export const NUTRITION_PLANS = [
  {
    id: 1,
    image: SuperPupPlanImage,
    altText: 'Image of a cute puppy',
    name: 'Super Pup Plan',
    fields: [
      {
        title: 'Duration',
        value: '6 months'
      },
      {
        title: 'Calories',
        value: '1,700'
      },
      {
        title: 'Exercise',
        value: '25km'
      },
      {
        title: 'Weight',
        value: '40.0kg'
      },
      {
        title: 'Target Condition',
        value: 'Ideal'
      }
    ],
  },
  {
    id: 2,
    image: BackInShapePlanImage,
    altText: 'Image of a obese puppy',
    name: 'Get Back In Shape Plan',
    fields: [
      {
        title: 'Duration',
        value: '1 year'
      },
      {
        title: 'Calories',
        value: '1,000'
      },
      {
        title: 'Exercise',
        value: '50km'
      },
      {
        title: 'Weight',
        value: '90.0kg'
      },
      {
        title: 'Target Condition',
        value: 'Ideal'
      }
    ],
  },
  {
    id: 3,
    image: ActiveRunnerPlanImage,
    altText: 'Illustration of man running with dog',
    name: 'Active Runner Plan',
    fields: [
      {
        title: 'Duration',
        value: '4 weeks'
      },
      {
        title: 'Calories',
        value: '1,500'
      },
      {
        title: 'Exercise',
        value: '80km'
      },
      {
        title: 'Weight',
        value: '40.0kg'
      },
      {
        title: 'Target Condition',
        value: 'Ideal'
      }
    ],
  }
];

export const PLAN_IMAGES = {
  Duration: DurationPlanImg,
  Calories: CaloriesPlanImg,
  Exercise: ExercisePlanImg,
  Weight: WeightPlanImg,
  'Target Condition': TargetConditionPlanImg
};

