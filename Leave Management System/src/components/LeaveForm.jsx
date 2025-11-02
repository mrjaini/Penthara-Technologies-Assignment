import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LeaveContext } from "../context/LeaveContext";
import image from "../assets/form-image.png";

export default function LeaveForm() {
  const { addLeave } = useContext(LeaveContext); // Leave context used for adding leave data in local storage

  // States used for form fields
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [type, setType] = useState("");
  const [reason, setReason] = useState("");

  // Navigate hook to redirect after form submission
  const navigate = useNavigate();

  // This is form submit handler to add leave data and clear form fields after submission and also redirect to leave history page
  const handleSubmit = (e) => {
    e.preventDefault();
    addLeave({
      from,
      to,
      reason,
      type,
    });
    setFrom("");
    setTo("");
    setReason("");
    setType("");
    navigate("/leave-history");
  };

  return (
    // This is leave form component
    <div className="h-screen w-full bg-white m-5 rounded-2xl flex">

      {/* This is image div section */}
      <div>
        <h1 className="text-5xl font-extrabold mt-30 ml-25">Form</h1>
        <img src={image} alt="image" className="w-100 ml-20 mt-3" />
      </div>

      {/*This is Form div sectio */}
      <div className="w-1/2 mx-auto my-auto bg-white text-black p-6 rounded-2xl shadow-xl border border-gray-200">
        <h2 className="text-xl font-semibold mb-3">Apply for Leave</h2>

        {/* this is form section */}
        <form className="space-y-3" onSubmit={handleSubmit}>

          {/* Input Fields */}
          <div>
            <label className="block text-sm mb-1">From Date</label>
            <input
              type="date"
              className="w-full p-2 rounded-lg border border-gray-300"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">To Date</label>
            <input
              type="date"
              className="w-full p-2 rounded-lg border border-gray-300"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Type</label>
            <select
              className="w-full p-2 rounded-lg border border-gray-300"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="" disabled>Select leave type</option>
              <option value="Casual">Casual Leave</option>
              <option value="Earn">Earn Leave</option>
              <option value="Sick">Sick Leave</option>
            </select>

          </div>

          <div>
            <label className="block text-sm mb-1">Reason of Leave</label>
            <textarea
              className="w-full p-2 rounded-lg border border-gray-300"
              rows="3"
              placeholder="Enter reason..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
