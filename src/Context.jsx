import { useReducer } from "react";
import { createContext } from "react";

export const Themecontext = createContext();

const initialState = { darkMode: true };

const ThemeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode
    }
    default:
              return state;

  }
};
export const ThemeProvider=(props)=>{
              const [state,dispatch]=useReducer(ThemeReducer,initialState);
              return(
                     <Themecontext.Provider value={{state,dispatch}}>
                            {props.children}
                     </Themecontext.Provider>       
              )
}
