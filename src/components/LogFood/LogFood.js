import {useState, useRef} from 'react';

import classes from './LogFood.module.css';

export const LogFood = props => {
  let [toggleState, setToggleState] = useState(true);
  const inputDayOne = useRef();
  const inputDayTwo = useRef();
  const inputDayThree = useRef();
  const inputDayFour = useRef();
  const inputDayFive = useRef();
  const inputDaySix = useRef();
  const inputDaySeven = useRef();

  const toggleStateClickHandler = e => {
    setToggleState(prevToggleState => toggleState = !prevToggleState);
  };

  const submitFormHandler = e => {
    e.preventDefault();
    const weeklyCalories = +inputDayOne.current.value.replace(/,/g, '') +
      (+inputDayTwo.current.value.replace(/,/g, '') || 0) +
      (+inputDayThree.current.value.replace(/,/g, '') || 0) +
      (+inputDayFour.current.value.replace(/,/g, '') || 0) +
      (+inputDayFive.current.value.replace(/,/g, '') || 0) +
      (+inputDaySix.current.value.replace(/,/g, '') || 0) +
      (+inputDaySeven.current.value.replace(/,/g, '') || 0);
    props.logWeeklyFood(weeklyCalories);

    inputDayOne.current.value = '';
    inputDayTwo.current.value = '';
    inputDayThree.current.value = '';
    inputDayFour.current.value = '';
    inputDayFive.current.value = '';
    inputDaySix.current.value = '';
    inputDaySeven.current.value = '';
    setTimeout(() => {toggleStateClickHandler();}, 200);

  };

  return (
    <div className={`${classes.LogFoodWrapper}`}>
      <h4 className={`text--primary mb-17`}>Food Log</h4>

      <div className={`accordion ${classes.widgetHeader}`} id="accordionExample">
        <div className={`accordion-item`}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className={`accordion-button alert-widget-danger widget-with-image-text ${toggleState ? 'collapsed' : ''}`}
              type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
              aria-expanded={`${toggleState ? 'false' : 'true'}`} aria-controls="collapseOne"
              onClick={toggleStateClickHandler}>
              {toggleState ? 'Log Bruno\'s food for last week' : 'Bruno\'s food last week'}
            </button>
          </h2>
          <div id="collapseOne" className={`accordion-collapse ${toggleState ? 'collapse' : 'show'}`}
               aria-labelledby="headingOne"
               data-bs-parent="#accordionExample">
            <div className="accordion-body">
              <form className={`${classes.FoodForm}`} onSubmit={submitFormHandler}>
                <div className={`${classes.FoodFormRow}`}>
                  <span className={`text--light-orange`}>Day 1</span>
                  <input type="number" className={`form-control`} name="calories1" ref={inputDayOne} />
                </div>

                <div className={`${classes.FoodFormRow}`}>
                  <span className={`text--light-orange`}>Day 2</span>
                  <input type="number" className={`form-control`} name="calories2" ref={inputDayTwo} />
                </div>

                <div className={`${classes.FoodFormRow}`}>
                  <span className={`text--light-orange`}>Day 3</span>
                  <input type="number" className={`form-control`} name="calories3" ref={inputDayThree} />
                </div>

                <div className={`${classes.FoodFormRow}`}>
                  <span className={`text--light-orange`}>Day 4</span>
                  <input type="number" className={`form-control`} name="calories4" ref={inputDayFour} />
                </div>

                <div className={`${classes.FoodFormRow}`}>
                  <span className={`text--light-orange`}>Day 5</span>
                  <input type="number" className={`form-control`} name="calories5" ref={inputDayFive} />
                </div>

                <div className={`${classes.FoodFormRow}`}>
                  <span className={`text--light-orange`}>Day 6</span>
                  <input type="number" className={`form-control`} name="calories6" ref={inputDaySix} />
                </div>

                <div className={`${classes.FoodFormRow}`}>
                  <span className={`text--light-orange`}>Day 7</span>
                  <input type="number" className={`form-control`} name="calories7" ref={inputDaySeven} />
                </div>

                <div className={`d-flex justify-content-end`}>
                  <button className={`btn`}>Log</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
