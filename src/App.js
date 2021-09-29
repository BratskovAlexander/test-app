import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loader from "./Components/Loader";
import StrategyList from "./Components/StrategyList";
import CreateStrategy from "./Components/CreateStrategy";
import SelectStrategy from "./Components/SelectStrategy";
import "./App.css";
import { useTypedSelector } from "./hooks/useTypeSelector";
import { useAction } from "./hooks/strategyAction";

const mockStrategy = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false,
  },
];

const App = () => {
  const { isLoading } = useTypedSelector(({ strategy }) => strategy);
  const { getStrategy } = useAction();

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((response) => response.json())
        .then((allStrategies) => {
          setTimeout(() => {
            getStrategy(allStrategies);
          }, 3000);
        });
    } catch (err) {
      getStrategy(mockStrategy);
    }
  }, []);

  return (
    <BrowserRouter>
      <Switch>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Route path="/" exact component={StrategyList} />
            <Route path="/create-strategy" exact component={CreateStrategy} />
            <Route path="/select-strategy" exact component={SelectStrategy} />
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
