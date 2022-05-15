import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import validator from 'validator/es';

import logo from './logo.svg';
import classes from './Login.module.css';

export const Login = props => {
  const [activeClass, setActiveClass] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  const navigatge = useNavigate();

  const navClickHandler = (event, activeState) => {
    event.preventDefault();
    setActiveClass(activeState);
  };

  const loginClickHandler = event => {
    event.preventDefault();
    navigatge('/dashboard');
  };

  const onChangeEmailHandler = event => {
    setEmailField(event.target.value);
    setFormValid(validator.isEmail(event.target.value) && passwordField);
  }

  const onChangePasswordHandler = event => {
    setPasswordField(event.target.value);
    setFormValid(validator.isEmail(emailField) && event.target.value);
  };

  return (
    <div className="row">
      <div className="col-12 col-md-4 offset-md-4 text-center">
        <div className={`${classes.Login} mobile-width d-flex flex-column align-items-center`}>
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

          <div className={`w-100 px-4`}>
            <form onSubmit={loginClickHandler} className={`${!activeClass ? classes.active : ''}`}>
              <input onChange={onChangeEmailHandler} type="email" name="email" id="email" className={'form-control mb-2'} placeholder="email"/>
              <input onChange={onChangePasswordHandler} type="password" name="password" id="password" className={'form-control mb-4'} placeholder="password"/>
              <button className={'btn primary-btn w-100 mb-3'} disabled={!formValid}>Login</button>
              <a href="#">Forgot Password?</a>
            </form>

            <form  className={`${classes.loginForm} ${activeClass ? classes.active : ''}`}>
              <input onChange={onChangeEmailHandler} type="text" name="name" id="name" className={'form-control mb-2'} placeholder="name"/>
              <input onChange={onChangeEmailHandler} type="email" name="signup-email" id="signup-email" className={'form-control mb-2'} placeholder="email"/>
              <input onChange={onChangePasswordHandler} type="password" name="signup-password" id="signup-password" className={'form-control mb-4'} placeholder="password"/>
              <input onChange={onChangePasswordHandler} type="password" name="signup-password" id="signup-password" className={'form-control mb-4'} placeholder="confirm password"/>
              <button className={'btn primary-btn w-100 mb-3'} disabled={!formValid}>Signup</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
