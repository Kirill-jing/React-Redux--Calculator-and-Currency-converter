import React, { Component, Fragment } from 'react';
import { BrowserRouter ,  Route,Router, Switch } from 'react-router-dom';

import Join from './Containers/Join'
import Chat from './Containers/Chat'

 class App extends Component {
   render(){
     return(
<BrowserRouter >
<Switch>
<Route path = '/' exact component={Join}></Route>
<Route path = '/chat' component={Chat}></Route>
</Switch>
</BrowserRouter>
     
     )
   }
 }

 export default App