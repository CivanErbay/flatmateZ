import React from "react";
import  {
    BrowserRouter as Router,
    Route,
    Switch

} from "react-router-dom";
import Plan from "./Plan";
import {Whosnext} from "./Whosnext";


export const Navigation = () => {
    return (

     <Router>
         <Switch>
             <Route path="/whosnext" exact>
            <Whosnext/>
             </Route>
             <Route path="/" exact>
                 <Plan/>
             </Route>
         </Switch>
     </Router>




)
}