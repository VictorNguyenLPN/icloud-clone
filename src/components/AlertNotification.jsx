import React, { useState, useEffect } from "react";

const AlertNotification = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex w-full items-center rounded-xl justify-center bg-black bg-opacity-90 px-6 md:px-44">
      <div className="bg-customBG-darkest w-full lg:w-1/2 p-10 text-white rounded-xl shadow-2xl text-center">
        <p className="text-xl sm:text-2xl">
          This is an educational project to demonstrate phishing attacks I do
          not take any responsibility for any misuse of this information.
        </p>
        <button
          onClick={handleDismiss}
          className="mt-8 bg-white text-black/90 font-bold  px-5 py-2 rounded-xl hover:bg-gray-300"
        >
          Ok, I got it !
        </button>
      </div>
    </div>
  );
};

export default AlertNotification;
