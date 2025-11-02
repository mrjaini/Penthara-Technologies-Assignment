import React, { createContext, useCallback, useEffect, useState } from "react";

export const LeaveContext = createContext(null);

export function LeaveProvider({ children }) {
  const [leaves, setLeaves] = useState([]);

//   This effect clear local storage saved item after re-rendring
  useEffect(() => {
    return () => {
      localStorage.removeItem("leaves");
    };
  }, []);

// This effect set the items is local storage 
  useEffect(() => {
    localStorage.setItem("leaves", JSON.stringify(leaves));
  }, [leaves]);

//   This is add fuctionn to add leave in leave history component
const words = ["Approved", "Rejected", "Pending"]
  const addLeave = useCallback((leave) => {
    setLeaves((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        status: words[Math.floor(Math.random() * words.length)], // randomly assign status
        ...leave,
      },
    ]);
  }, []);

  return (
    <LeaveContext.Provider
      value={{
        leaves,
        addLeave,
      }}
    >
      {children}
    </LeaveContext.Provider>
  );
}
