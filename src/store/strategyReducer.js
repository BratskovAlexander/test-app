export const GET_STRATEGY = "GET_STRATEGY";
export const CREATE_STRATEGY = "CREATE_STRATEGY";
export const SELECT_STRATEGY = "SELECT_STRATEGY";
export const DELETE_STRATEGY = "DELETE_STRATEGY";

const initialeState = {
  strategies: [],
  isLoading: true,
  selectedCurrentStrategy: "",
};

export const strategyReducer = (state = initialeState, action) => {
  switch (action.type) {
    case GET_STRATEGY:
      return {
        ...state,
        strategies: action.payload,
        isLoading: false,
      };
    case CREATE_STRATEGY:
      return {
        ...state,
        strategies: action.payload,
        
      };
    case SELECT_STRATEGY:
      return {
        ...state,
        selectedCurrentStrategy: action.payload,
      };
    case DELETE_STRATEGY:
      return {
        ...state,
        strategies: action.payload,
      };

    default:
      return state;
  }
};
