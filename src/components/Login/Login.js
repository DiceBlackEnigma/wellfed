import {useState} from 'react';

import logo from './logo.svg';
import classes from './Login.module.css';

export const Login = props => {
  const [activeClass, setActiveClass] = useState(false);

  const navClickHandler = (event, activeState) => {
    event.preventDefault();
    setActiveClass(activeState);
  };

  return (
    <div className="row">
      <div className="col-12 col-md-4 offset-md-4 text-center">
        <div className={`${classes.Login} d-flex flex-column align-items-center`}>
          <img src={logo} alt="" className={classes.Logo}/>
          <nav className={`${activeClass ? classes.active : ''} w-100 d-flex mb-5`}>
            <a href="#" onClick={e => navClickHandler(e, false)} className={`${!activeClass ? classes.active : ''}`}>Log
              In</a>
            <a href="#" onClick={e => navClickHandler(e, true)} className={`${activeClass ? classes.active : ''}`}>Sign
              Up</a>
          </nav>
          <div className={`d-flex flex-column align-items-center ${classes.socialMediaSignupWrapper}`}>
            <button className={`btn ${classes.facebookBtn}`}>
              Continue with Facebook
            </button>
            <button className={`btn ${classes.googleBtn}`}>
              Continue with Google
            </button>
          </div>

          <div>
            <form>
              <input type="email" name="email" id="email" className={'form-control'} placeholder="email"/>
              <input type="password" name="password" id="password" className={'form-control'} placeholder="password"/>
              <button className={'btn btn-primary w-100'}>Login</button>
            </form>
            <a href="">Forgot Password?</a>
          </div>
        </div>
      </div>
    </div>
  );
};
