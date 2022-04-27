import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {

  const counter = useSelector(state => state.counter.counter);
  const showCounter = useSelector(state=> state.counter.showCounter);
  const dispatch = useDispatch();


  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  const onIncrementHandler = ()=> {
    dispatch(counterActions.increment());
  }

  const onDecrementHandler = ()=> {
    dispatch(counterActions.decrement());
  }

  const onIncreaseBy10Handler = ()=> {
    dispatch(counterActions.increase(10));
  }


  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={onIncrementHandler}>Increment Counter</button>
      <button onClick={onDecrementHandler}>Decrement Counter</button>
      <button onClick={onIncreaseBy10Handler}>Increase By 10</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
