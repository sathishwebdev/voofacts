import React from 'react';
import { Route, Switch, Redirect} from "react-router-dom";
import HomePage from './home';
import Otd from './otd';



function RouterConfig() {
    return (
      <div>
      <Switch>
      <Route exact path = "/" children = {<HomePage />} >

      </Route>
     
      <Route exact path = "/otd" children = {<Otd/>} >

      </Route>
   
      <Route path="/:var" children={<Redirect to="/" />}>
      
      </Route>
    
    
  </Switch>

  

</div>
);
}


export default RouterConfig;