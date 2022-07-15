import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [sidebarIsOpened, setSidebarIsOpened] = useState(false);
  return (
    <StateContext.Provider value={{ sidebarIsOpened, setSidebarIsOpened }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
