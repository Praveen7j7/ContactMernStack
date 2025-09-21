
import React from "react";

function Snackbar({ message, type, onClose }) {
  if (!message) return null;

  return (
    <div className={`fixed bottom-5 right-5 px-4 py-2 rounded shadow-lg text-white
        ${type === "success" ? "bg-green-500" : "bg-red-500"}`}>
      <div className="flex items-center space-x-2">
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 font-bold">×</button>
      </div>
    </div>
  );
}

export default Snackbar;
