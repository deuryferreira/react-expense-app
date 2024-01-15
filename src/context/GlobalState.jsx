import { createContext, useReducer, useContext } from "react";
import AppReducer from './AppReducer'

export const Context = createContext();

const initialState = { transactions: [] }


export const useGlobalState = () => {
  const context = useContext(Context)
  return context
}

export const GlobalProvider = ({ children }) => {

  const [state, dispatch] = useReducer(AppReducer, initialState)
  return <Context.Provider value={{ transactions: state.transactions }}>{children}</Context.Provider>;
};
