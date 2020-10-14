import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Plan from "./Plan";
import { Whosnext } from "./Whosnext";
import { ToDoWrapper } from "./ToDoWrapper";
import firebase from "../utils/firebase";

export const Navigation = () => {
    
    const [todoData, setTodoData] = useState(undefined)

  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.on("value", (snapshot) => {
     setTodoData(snapshot.val());
    });
  }, []);

  console.log(todoData)
  return (
    <Router>
      <Switch>
        <Route path="/todo" exact>
          <ToDoWrapper/>
        </Route>
        <Route path="/whosnext" exact>
          <Whosnext />
        </Route>
        <Route path="/" exact>
          <Plan />
        </Route>
      </Switch>
    </Router>
  );
};
