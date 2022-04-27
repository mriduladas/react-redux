import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const showCounter = useSelector(state=> state.showCounter);
  const dispatch = useDispatch();


  const toggleCounterHandler = () => {
    dispatch({type:'toggle'})
  };

  const onIncrementHandler = ()=> {
    dispatch({type: 'increment'})
  }

  const onDecrementHandler = ()=> {
    dispatch({type: 'decrement'})
  }

  const onIncreaseBy10Handler = ()=> {
    dispatch({type: 'increase', amount:10})
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
