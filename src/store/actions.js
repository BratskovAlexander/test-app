import {
  GET_STRATEGY,
  CREATE_STRATEGY,
  SELECT_STRATEGY,
  DELETE_STRATEGY,
} from "./strategyReducer";

export const getStrategy = (data) => {
  return {
    type: GET_STRATEGY,
    payload: data,
  };
};

export const createStrategy = (data) => {
  return {
    type: CREATE_STRATEGY,
    payload: data,
  };
};

export const selectStrategy = (data) => {
  return {
    type: SELECT_STRATEGY,
    payload: data,
  };
};

export const deleteStrategy = (data) => {
  return {
    type: DELETE_STRATEGY,
    payload: data,
  };
};
