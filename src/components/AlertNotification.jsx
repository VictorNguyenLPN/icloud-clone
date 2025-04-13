import React, { useState, useEffect } from "react";

const AlertNotification = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center rounded-xl justify-center bg-black bg-opacity-70 p-10">
      <div className="bg-red-600 text-white p-6 rounded shadow-2xl text-center">
        <p className="text-2xl">
          This is an educational project to demonstrate phishing attacks <br />I
          do not take any responsibility for any misuse of this information.
        </p>
        <button
          onClick={handleDismiss}
          className="mt-4 bg-black text-white px-4 py-2 rounded-xl"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default AlertNotification;
