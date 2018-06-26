// export const TEST_ACTION = 'test_action';
import axios from 'axios';
export const ADD_ITEM = 'add_item';
export const REMOVE_ITEM = 'remove_item';
export const FETCH_DATA = 'fetch_data';

// export function test_action_fun(number){
//     return {type: TEST_ACTION, task: number+1+''}
// }

export function add_item_fun(id){
    return {
        type: ADD_ITEM, id
    }
}

export function remove_item_fun(id){
    return{
        type: REMOVE_ITEM, id
    }
}

export function fetch_data_fun(user){
   return dispatch => {
        axios.get('https://raw.githubusercontent.com/diksha0562/Shoppung_redux/master/data')
    .then(response =>{dispatch({type:FETCH_DATA ,payload:response.data[user]})
    })
    .catch(error => console.log(error));
   }
}
