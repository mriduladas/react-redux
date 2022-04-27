import {createStore} from 'redux';

const counterReducer = (state={counter:0}, action) =>{


    if(action.type==='increment'){
    return {
        counter: state.counter +1 
        };
        }
    if(action.type==='decrement'){
        return {
            counter: state.counter -1
        };
        }
    if(action.type==='increase'){
        return {
            counter: state.counter +action.amount
            };
            }
    return state;

}

// const storeSubscriber=() =>{
//     const counter = store.getState();
//     console.log(counter);
// }

const store = createStore(counterReducer);

export default store;

