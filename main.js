import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import App from './src/App';
import {test_action_fun} from './src/action/index';
import rootReducer from './src/reducer/index';
const store = createStore(rootReducer, applyMiddleware(thunk));
//r, guaranteed that all subscribers registered before the dispatch()
// store.subscribe(()=>console.log('store', store.getState()));// 9...2
// store.dispatch(test_action_fun(5));
// store.subscribe(()=>console.log('store', store.getState()));//2
// store.dispatch(test_action_fun(1));
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
, document.getElementById('app'));