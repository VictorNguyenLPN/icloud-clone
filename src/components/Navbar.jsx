import React, { useState, useRef, useEffect } from "react";
import WhiteAppleIcon from "../assets/white_apple_icon.png";
import WhiteThreeDotsIcon from "../assets/white_three_dots_icon.svg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [state, setState] = useState(false);
  const contentRef = useRef(null);
  const navigate = useNavigate();
  const handleUserGuide = () => {
    setState((prevState) => !prevState);
  };

  const handleClickOutside = (event) => {
    if (contentRef.current && !contentRef.current.contains(event.target)) {
      setState(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar flex fixed absolute// h-16 justify-between px-4 py-2 bg-transparent backdrop-blur-md w-full text-white ">
      <button
        className="flex items-center"
        onClick={() => {
          window.location.reload();
        }}
      >
        <img
          src={WhiteAppleIcon}
          alt="black apple icon"
          className="black-apple-icon w-5"
        />
        <h2 className="text-xl font-medium pt-1 ml-0.5">iCloud</h2>
      </button>
      <div className="relative">
        <button
          className="text-2xl cursor-pointer rounded-lg"
          onClick={handleUserGuide}
        >
          <img
            src={WhiteThreeDotsIcon}
            alt="three dots icon"
            className={`w-10 p-2 hover:bg-gray-200/20 rounded-md ${
              state ? "hidden" : ""
            }`}
          />
        </button>
        {state && (
          <div
            ref={contentRef}
            className="absolute shadow-black right-0 top-1 w-48 bg-black/20// text-base text-blue-400 hover:text-blue-600 py-2 px-4 flex justify-center items-center rounded-xl"
          >
            <a
              href="https://support.apple.com/en-vn/guide/icloud/welcome/icloud"
              target="_blank"
              rel="noopener noreferrer"
            >
              iCloud User Guide
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
