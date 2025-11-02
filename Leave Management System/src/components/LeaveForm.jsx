import React, { useState } from "react";
import image from '../assets/form-image.png'
const LeaveForm = () => {
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    reason: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Leave Applied Successfully ");
    setFormData({ from: "", to: "", reason: "" });
  };

  return (
    <div className="h-screen w-full bg-white m-5 rounded-2xl flex">
      <div>
        <h1 className="text-5xl font-extrabold mt-30 ml-25">Form</h1>
        <img src={image} alt="image" className="w-100  ml-20 mt-3"/></div>
    <div className="w-1/2 mx-auto my-30 bg-white text-black p-6 rounded-2xl shadow-xl border border-gray-200">
      <h2 className="text-xl font-semibold mb-3">Apply for Leave</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label className="block text-sm mb-1">From Date</label>
          <input
            type="date"
            className="w-full p-2 rounded-lg border border-gray-300"
            value={formData.from}
            onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">To Date</label>
          <input
            type="date"
            className="w-full p-2 rounded-lg border border-gray-300"
            value={formData.to}
            onChange={(e) => setFormData({ ...formData, to: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Reason of Leave</label>
          <textarea
            className="w-full p-2 rounded-lg border border-gray-300"
            rows="3"
            placeholder="Enter reason..."
            value={formData.reason}
            onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default LeaveForm;
