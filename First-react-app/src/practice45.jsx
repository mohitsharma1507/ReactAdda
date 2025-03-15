import { createContext, useReducer } from "react";

const initialState = {
  count: 0,
};

const countReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count > 0 ? state.count - 1 : 0 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
  const [state, dispatch] = useReducer(countReducer, initialState);
  return (
    <CountContext.Provider value={{ count: state.count, dispatch }}>
      {children}
    </CountContext.Provider>
  );
};
