import {ADD_ITEM, REMOVE_ITEM, FETCH_DATA} from '../action'
import axios from 'axios';

function fetch_data_fun(state=[], action){
    switch(action.type){
        case FETCH_DATA : 
        console.log('action.payload',action.payload);
            return action.payload
        default : 
            return state
    }
}
export default fetch_data_fun;