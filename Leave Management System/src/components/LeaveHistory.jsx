import React, { useContext, useEffect, useState } from "react";
import { LeaveContext } from "../context/LeaveContext";
import historyImage from "../assets/form-history.png";

export default function LeaveHistory() {

    // Leave context used for data store in local storage and retrive 
  const { leaves } = useContext(LeaveContext);

//   This is initial leave data
  const initialLeaves = [
    { id: 1, from: "2025-10-10", to: "2025-10-12", reason: "Fever", status: "Approved" },
    { id: 2, from: "2025-09-05", to: "2025-09-07", reason: "Travel", status: "Pending" },
    { id: 3, from: "2025-09-03", to: "2025-09-05", reason: "Travel", status: "Rejected" },
  ];

  const [myLeaves, setMyLeaves] = useState([]);

  useEffect(() => {

    // This is all leave data (initial + new added)
    const allLeaves = [...initialLeaves, ...leaves]
    setMyLeaves(allLeaves);

  }, [leaves]);

  return (
    <div className="w-screen h-screen bg-white m-5 rounded-2xl flex">

        {/* This  is image section */}
      <div>
        <h1 className="text-5xl font-extrabold mt-30 ml-32">History</h1>
        <img src={historyImage} alt="image" className="w-120 ml-10" />
      </div>

      {/* This is leave history section to show data */}
      <div className="w-1/2 m-auto bg-white text-black p-6 rounded-2xl shadow-lg border border-gray-200">
        <h2 className="text-xl font-semibold mb-3">Leave History</h2>

        {/* Div section showing data of leave */}
        <div className="max-h-80 overflow-y-auto border border-gray-100 rounded-lg">

            {/* Table for data show  */}
          <table className="w-full border-collapse">

            {/* Table-head with headings */}
            <thead className="sticky top-0 bg-white shadow-sm">
              <tr className="border-b border-gray-300">
                <th className="text-left py-2 px-3">From</th>
                <th className="text-left py-2 px-3">To</th>
                <th className="text-left py-2 px-3">Reason</th>
                <th className="text-left py-2 px-3">Status</th>
              </tr>
            </thead>

            {/* Table body to set leave data */}
            <tbody>

                {/* This is condional rendering of leave data */}
              {myLeaves.length > 0 ? (
                myLeaves.map((l) => (
                  <tr key={l.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                    <td className="py-2 px-3">{l.from}</td>
                    <td className="py-2 px-3">{l.to}</td>
                    <td className="py-2 px-3">{l.reason}</td>
                    <td
                      className={`p-4 rounded-lg 
                        ${l.status === "Approved" ? "text-green-500" : ""}
                        ${l.status === "Pending" ? "text-yellow-500" : ""}
                        ${l.status === "Rejected" ? "text-red-500" : ""}
                      `}
                    >
                      {l.status}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center py-4 text-gray-500">
                    No leave history available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
