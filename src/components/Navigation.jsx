import React from "react";
import  {
    BrowserRouter as Router,
    Route,
    Switch

} from "react-router-dom";
import Plan from "./Plan";
import {Whosnext} from "./Whosnext";
import {ToDoWrapper} from "./ToDoWrapper";


export const Navigation = () => {
    return (

     <Router>
         <Switch>
            <Route path="/todo" exact>
                 <ToDoWrapper/>
             </Route>
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