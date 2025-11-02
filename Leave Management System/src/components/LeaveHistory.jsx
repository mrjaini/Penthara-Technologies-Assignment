import React from "react";
import historyImage from '../assets/form-history.png'

const LeaveHistory = () => {
    const leaves = [
        { id: 1, from: "2025-10-10", to: "2025-10-12", reason: "Fever", status: "Approved" },
        { id: 2, from: "2025-09-05", to: "2025-09-07", reason: "Travel", status: "Pending" },
        { id: 3, from: "2025-09-03", to: "2025-09-05", reason: "Travel", status: "Rejected" },
        { id: 1, from: "2025-07-11", to: "2025-07-12", reason: "Fever", status: "Rejected" },
        { id: 2, from: "2025-07-05", to: "2025-07-09", reason: "Voting", status: "Pending" },
        { id: 3, from: "2025-06-23", to: "2025-06-25", reason: "Hospital", status: "Approved" },
        { id: 1, from: "2025-04-17", to: "2025-04-22", reason: "Travel", status: "Approved" },
        
    ];

    return (
        <div className="w-screen h-screen bg-white m-5 rounded-2xl flex">
            
            <div>
                <h1 className="text-5xl font-extrabold mt-30 ml-32">History</h1>
                <img src={historyImage} alt="image" className="w-120 ml-10"/></div>
        <div className=" w-1/2 m-auto  bg-white text-black p-6 rounded-2xl shadow-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-3">Leave History</h2>
            <table className="w-full border-collapse">
                <thead>
                    <tr className="border-b border-gray-300">
                        <th className="text-left py-2">From</th>
                        <th className="text-left py-2">To</th>
                        <th className="text-left py-2">Reason</th>
                        <th className="text-left py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {leaves.map((leave) => (
                        <tr key={leave.id} className="border-b border-gray-200 ">
                            <td className="py-2">{leave.from}</td>
                            <td className="py-2">{leave.to}</td>
                            <td className="py-2">{leave.reason}</td>
                            <td
                                className={`p-4 rounded-lg 
                                            ${leave.status === "Approved" ? "text-green-500" : ""}
                                            ${leave.status === "Pending" ? "text-yellow-500" : ""}
                                            ${leave.status === "Rejected" ? "text-red-500" : ""}
                                        `}
                            >
                                {leave.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default LeaveHistory;
