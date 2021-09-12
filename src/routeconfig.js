import React from 'react';
import { Route, Switch, Redirect} from "react-router-dom";
import HomePage from './home';
import Sharebutton from './sharebutton';


function RouterConfig() {
    return (
      <div>
      <Switch>
      <Route exact path = "/" children = {<HomePage />} >

      </Route>
     
      <Route  path = "/share" children = {<Sharebutton /> } >

</Route>
   
    <Route path="/:var" children={<Redirect to="/" />}>
      
      </Route>
    
    
  </Switch>

  

</div>
);
}


export default RouterConfig;