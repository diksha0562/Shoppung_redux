import {combineReducers} from 'redux';
import fetch_data_reducer from './fetch_data_reducer';

const rootReducer = combineReducers({
    fetch_data_reducer
})

export default rootReducer;















// import {TEST_ACTION} from '../action';

// const ini_state = {
//     "name":"Diksha","company":"GL"
// }
// function test_reducer(state=ini_state, action){
// switch(action.type){
//     case TEST_ACTION: 
//         return action.task;
//     default: return state;
// }
// }

// export default test_reducer;