import React, { createContext, useCallback, useEffect, useState } from "react";

export const LeaveContext = createContext(null);

export function LeaveProvider({ children }) {
  const [leaves, setLeaves] = useState([]);

  //this is to load saved leaves from localStorage on first render
  useEffect(() => {

    // this is retrive data from local storage
    const savedLeaves = JSON.parse(localStorage.getItem("leaves")) || [];
    setLeaves(savedLeaves);
  }, []);

  // This is to save leaves to localStorage
  useEffect(() => {
    localStorage.setItem("leaves", JSON.stringify(leaves));
  }, [leaves]);

  // This list is to add new leave with random status
  const words = ["Approved", "Rejected", "Pending"];

  // This is to add new leave
  const addLeave = useCallback((leave) => {
    setLeaves((prev) => [
      ...prev,
      {
        id: Date.now().toString(), // this is for unique ID for each leave
        status: words[Math.floor(Math.random() * words.length)], // Random status assiged to new added leave
        ...leave,
      },
    ]);
  }, []);

  return (
    <LeaveContext.Provider value={{ leaves, addLeave }}>
      {children}
    </LeaveContext.Provider>
  );
}
