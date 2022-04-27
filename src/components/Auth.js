import { useDispatch, useSelector } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store';

const Auth = () => {

  const auth = useSelector(state=> state.auth.isAuthenticated);

  const dispatch= useDispatch();

  const onClickHandler =(event) =>{
    event.preventDefault();
    console.log('clicked');
    dispatch(authActions.login());
  }

  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={onClickHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
