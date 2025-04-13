import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-between lg:flex-row text-xs w-full bg-customBG-darkLess text-gray-200 lg:px-44 py-6 mt-auto">
      <div className="flex">
        <button className="p-2">
          <a href="https://www.apple.com/support/systemstatus/">
            System Status
          </a>
        </button>
        <div className="p-2">|</div>
        <button className="p-2">
          <a href="https://www.apple.com/legal/privacy/">Privacy Policy</a>
        </button>
        <div className="p-2">|</div>
        <button className="p-2">
          <a href="https://www.apple.com/legal/internet-services/icloud/">
            Terms & Conditions
          </a>
        </button>
      </div>
      <div className="flex">
        Copyright © 2025 Apple Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
