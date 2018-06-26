import React from 'react';
import {BrowserRouter, Link} from 'react-router-dom';
import Home from './components/Home';

class App extends React.Component {
   render() {
      return (
         <div>
            <h3>Welcome to Shopping Cart</h3>
           <Home/>
         </div>
      );
   }
}
export default App;