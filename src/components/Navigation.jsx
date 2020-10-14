import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Plan from "./Plan";
import { Whosnext } from "./Whosnext";
import { ToDoWrapper } from "./ToDoWrapper";
import firebase from "../utils/firebase";

export const Navigation = () => {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");
    todoRef.on("value", (snapshot) => {
      const todos = snapshot.val();
      const tempList = [];

      for (let id in todos) {
        tempList.push({ id, ...todos[id] });
      }
      setTodoData(tempList);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/todo" exact>
          <ToDoWrapper data={todoData} />
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
