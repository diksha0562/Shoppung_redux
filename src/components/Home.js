import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import { fetch_data_fun } from '../action';
import Data from './Data';

class Home extends React.Component {
   render() {
      return (
        <BrowserRouter>
         <div>
            <ul>
           <li onClick={() =>{this.props.fetch_data_fun('women')}}> <Link to='/women'>Women</Link></li>
           <li onClick={() =>{this.props.fetch_data_fun('men')}}> <Link to='/men'>Men</Link></li>
           <li onClick={() =>{this.props.fetch_data_fun('children')}}> <Link to='/children'>Children</Link></li>
            </ul>
            <Switch>
            <Route path = '/women' render = { ()=> <Data />} />
            <Route path = '/men' render = { ()=> <Data />} />
            <Route path = '/children' render = { ()=> <Data />} />
            </Switch>
            </div>
            </BrowserRouter>
         
      );
   }
}
export default connect(null,{fetch_data_fun})(Home);