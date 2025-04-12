import AppleLoginIcon from "../assets/apple.svg";
import { useState } from "react";
import { BsArrowRightCircle } from "react-icons/bs";

const LoginForm = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const handleDropdown = () => {
    setIsDropdown(!isDropdown);
    // console.log("Dropdown: ", isDropdown);
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
    // console.log("Dropdown: ", isDropdown);
    console.log("Logging in with:", { email, password });
  };

  return (
    <div
      className="login-form flex flex-col items-center justify-center w-[30rem] p-10 rounded-2xl  shadow-2xl//"
      style={{ boxShadow: "0px 0px 50px rgba(0, 0, 0, 11)" }}
    >
      <img src={AppleLoginIcon} alt="apple login icon" className="w-40" />
      <h2 className="heading text-2xl font-semibold tracking-tight mt-4">
        Sign in with Apple Account
      </h2>

      <div
        className={`flex w-full border-[0.1px] border-gray-200/10 mt-8 bg-customBG-dark ${
          !isDropdown ? "rounded-xl" : "rounded-t-xl"
        }`}
      >
        <input
          type="text"
          placeholder="Email or Phone number"
          className={`p-3 pl-4 w-full tracking-wider bg-transparent text-sm outline-none`}
          value={email}
          onChange={handleEmailChange}
        />
        <button className="mr-4" onClick={handleDropdown}>
          {!isDropdown && <BsArrowRightCircle size={25} color={"white"} />}
        </button>
      </div>
      {isDropdown ? (
        <div
          className={`flex w-full border-[0.1px] border-gray-200/10 bg-customBG-dark ${
            !isDropdown ? "rounded-xl" : "rounded-b-xl"
          }`}
        >
          <input
            type="text"
            placeholder="Password"
            className={`p-3 pl-4 w-full tracking-wider bg-transparent text-sm outline-none`}
            value={password}
            onChange={handlePasswordChange}
          />
          <button className="mr-4" onClick={handleLogin}>
            <BsArrowRightCircle size={25} color={"white"} />
          </button>
        </div>
      ) : (
        ""
      )}

      <div className="mt-10 ">
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

      <div className="flex flex-col mt-10 text-xs text-blue-500 gap-2">
        <a href="https://iforgot.apple.com/password/verify/appleid">
          Forgot password?
        </a>
        <a href="https://www.icloud.com/system/icloud.com/2512Hotfix21/en-us/">
          Create Apple Account
        </a>
      </div>
    </div>
  );
};
export default LoginForm;
