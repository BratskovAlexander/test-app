import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypeSelector";
import StrategyItem from "./StrategyItem";
import { useAction } from "../hooks/strategyAction";
import { Button, Container, List } from "@mui/material";

const StrategyList = () => {
  const { strategies } = useTypedSelector(({ strategy }) => strategy);
  const { selectStrategy } = useAction();

  useEffect(() => {
    selectStrategy("");
  }, []);

  return (
    <Container className="container-for-mobile">
      <h1 className="heading">List of strategies</h1>
      <List>
        {strategies.map((strategy, index) => {
          return (
            <StrategyItem
              strategy={strategy}
              key={strategy.id}
              index={index}
              btnDelete
            />
          );
        })}
      </List>
      <NavLink to="/create-strategy">
        <Button className="btn btn-custom" variant="contained">
          Add Strategy
        </Button>
      </NavLink>
    </Container>
  );
};

export default StrategyList;
