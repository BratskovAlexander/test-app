import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypeSelector";
import StrategyItem from "./StrategyItem";
import { useAction } from "../hooks/strategyAction";
import { Container } from "react-bootstrap/lib/Tab";
import { ListGroup } from "react-bootstrap";

const StrategyList = () => {
  const { strategies } = useTypedSelector(({ strategy }) => strategy);
  const { selectStrategy } = useAction();

  useEffect(() => {
    selectStrategy("");
  }, []);

  return (
    <Container className="container-for-mobile">
      <h1 className="heading">List of strategies</h1>
      <ListGroup>
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
      </ListGroup>
      <NavLink className="btn btn-custom" to="/create-strategy">
        Add Strategy
      </NavLink>
    </Container>
  );
};

export default StrategyList;
