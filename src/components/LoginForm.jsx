import AppleLoginIcon from "../assets/apple.svg";
import React, { useState, useRef, useEffect } from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import ProgressCircle from "./ProgressCircle";
import LoadingCircle from "../assets/loading.svg";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);

  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
    // console.log("Dropdown: ", isDropdown);
  };

  const handleLoading = () => {
    setIsLoading(!isLoading);
    // console.log("Loading: ", isLoading);
  };

  const handleVerify = () => {
    setIsVerifying(!isVerifying);
    // console.log("Verifying: ", isVerifying);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    // console.log("Email: ", email);
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();

    setPassword(e.target.value);
    // console.log("Password: ", password);
  };

  const handleLogin = () => {
    // setIsLoading(false);
    setIsVerifying(true);
    console.log("Logging in with:", { email, password });
  };

  const [otp, setOtp] = useState(Array(6).fill(""));
  const otpRefs = useRef(
    Array(6)
      .fill()
      .map(() => React.createRef())
  );

  const handleOtpChange = (index, value) => {
    // console.log("Index, Value: ", index, value);

    // if (index == 5) {
    //   handleOtpChange(index - 1, value);
    //   // return;
    // }
    const lastChar = value.slice(-1);
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = lastChar;
      // console.log("New OTP State: ", newOtp);

      return newOtp;
    });

    if (otp.every((digit) => digit !== "")) {
      handleVerifyCode(otp);
    }

    // auto focus on next input
    if (value.length === 1 && index < otp.length - 1) {
      otpRefs.current[index + 1].focus();
    }
    if (value.length === 0 && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleVerifyCode = (otp) => {
    const otpCode = otp.join("");
    console.log("Verifying OTP:", otpCode);
    window.location.href = "https://icloud.com";
  };

  return (
    <div
      className="login-form flex flex-col items-center justify-center w-[20rem] sm:w-[30rem] p-10 rounded-2xl  shadow-2xl//"
      style={{ boxShadow: "0px 0px 50px rgba(0, 0, 0, 11)" }}
    >
      <img
        src={AppleLoginIcon}
        alt="apple login icon"
        className="w-32 sm:w-40"
      />

      {!isVerifying ? (
        <div className="w-full">
          <h2 className="heading text-lg sm:text-2xl font-semibold tracking-tight mt-4">
            Sign in with Apple Account
          </h2>
          <div
            className={`flex w-full border-[0.1px] border-gray-200/10 mt-4 sm:mt-8 bg-customBG-darker  ${
              !isDropdown ? "rounded-xl" : "rounded-t-xl"
            }`}
          >
            <input
              type="text"
              placeholder="Email or Phone number"
              className={`p-3 pl-4 w-full tracking-wider text-xs sm:text-sm outline-none bg-transparent ${
                !isDropdown ? "rounded-xl" : "rounded-b-xl"
              }`}
              value={email}
              onChange={handleEmailChange}
            />
            <button className="mr-4" onClick={handleDropdown}>
              {!isDropdown && (
                <BsArrowRightCircle
                  size={window.innerWidth < 640 ? 20 : 25}
                  color={"white"}
                />
              )}
            </button>
          </div>
          {isDropdown ? (
            <div
              className={`flex w-full border-[0.1px] border-gray-200/10 bg-customBG-darker ${
                !isDropdown ? "rounded-xl" : "rounded-b-xl"
              }`}
            >
              <input
                type="text"
                placeholder="Password"
                className={`p-3 pl-4 w-full tracking-wider bg-transparent text-xs sm:text-sm outline-none ${
                  !isDropdown ? "rounded-xl" : "rounded-b-xl"
                }`}
                value={password}
                onChange={handlePasswordChange}
              />

              {!isLoading ? (
                <button className="mr-4" onClick={handleLogin}>
                  <BsArrowRightCircle
                    size={window.innerWidth < 640 ? 20 : 25}
                    color={"white"}
                  />
                </button>
              ) : (
                <img
                  src={LoadingCircle}
                  alt="loading circle"
                  className="animate-spin w-10 mr-2"
                />
              )}
            </div>
          ) : (
            ""
          )}

          <div className="mt-8 sm:mt-10 ">
            <input
              type="checkbox"
              name="keepmesignedin"
              id="keepmesignedin"
              // style={{ backgroundColor: "black" }}
            />
            <label htmlFor="keepmesignedin" className="text-sm text-white ml-2">
              Keep me signed in
            </label>
          </div>

          <div className="flex flex-col mt-8 sm:mt-10 text-xs text-blue-500 gap-2">
            <a href="https://iforgot.apple.com/password/verify/appleid">
              Forgot password?
            </a>
            <a href="https://www.icloud.com/system/icloud.com/2512Hotfix21/en-us/">
              Create Apple Account
            </a>
          </div>
        </div>
      ) : (
        <div className="w-full bg-red-100// mt-8">
          <h1 className="text-lg">Two-Factor Authentication</h1>
          <div className="gap-1 flex items-center justify-center mt-4 font-bold text-lg">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="text"
                className={`w-9 p-1 rounded-lg bg-customBG-darker border-[1px] border-gray-200/60 text-center outline-none ${
                  digit ? "border-green-500" : ""
                }`}
                value={digit}
                onChange={(e) => handleOtpChange(index, e.target.value)}
                // onFocus={(e) => e.target.select()}
                ref={(ref) => (otpRefs.current[index] = ref)}
              />
            ))}
          </div>
          <h2 className="text-sm mt-8">
            Enter the verification code sent to your Apple devices.
          </h2>
          <div className="flex flex-col text-xs mt-4 text-blue-500">
            <button>Resend code to devices</button>
            <button className="tracking-wide mt-1">
              Can't get to your devices
            </button>
          </div>
          <hr className="mt-4 w-full h-[0.5px]" />
          <p className="text-xs mt-4 tracking-wide">
            If you can’t enter a code because you’ve lost your device, you{" "}
            {/* {window.innerHeight < 640 && <br />} */}
            can use Find Devices to locate it or Manage Devices{" "}
            {/* {window.innerHeight < 640 && <br />} */}
            to remove your Apple Pay cards from it.
          </p>
        </div>
      )}
    </div>
  );
};
export default LoginForm;
