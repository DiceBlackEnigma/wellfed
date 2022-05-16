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

export const CALORIES = [
  [0, 0], [1, 10], [2, 23], [3, 17], [4, 18], [5, 9],
  [6, 11], [7, 27], [8, 33], [9, 40], [10, 32], [11, 35],
  [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
  [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
  [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
  [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
  [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
  [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
  [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
  [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
  [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
  [66, 70], [67, 72], [68, 75], [69, 80]
];

