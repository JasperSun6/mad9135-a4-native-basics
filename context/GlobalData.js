import React, { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [teamList, setTeamList] = useState([]);

  async function handleFetch() {
    const res = await fetch("https://random-data-api.com/api/v2/users?size=5");
    const data = await res.json();
    setTeamList(data);
  }

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <>
      <GlobalContext.Provider
        value={{
          teamList,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
};

function useGlobalContext() {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
}

export { GlobalProvider, useGlobalContext };
