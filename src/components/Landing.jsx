import React, { useState } from "react";
import cloud_logo from "../assets/cloud_logo.svg";
import icloud2tb from "../assets/2tb.png";
import appList from "../assets/icons.png";
import LoginForm from "./LoginForm";
import Footer from "./Footer";

const Landing = () => {
  const [signInRequest, setSignInRequest] = useState(false);

  const handleSignInButton = () => {
    // console.log("Sign In button clicked");
    setSignInRequest(!signInRequest);
  };

  return (
    <div className="landing flex flex-col items-center text-center text-white bg-customBG-dark h-fit pt-20">
      {!signInRequest ? (
        <div className="container flex flex-col items-center justify-center gap-4 w-full mb-20">
          <div className="icloud-animate flex flex-col items-center justify-center border-[1px]// p-2 gap-2">
            <img
              src={cloud_logo}
              alt="iCloud Logo"
              className="w-52 lg:w-[18rem] xl:w-[25rem] rounded-xl p-11 box-content animate-pulse"
            />
            <h1 className="icloud-heading text-7xl sm:text-[100px] xl:text-[8rem] tracking-tight font-bold">
              iCloud
            </h1>
          </div>
          <div className="icloud-content flex flex-col items-center justify-center border-[1px]// p-2 gap-6 xl:gap-10 ">
            <button
              className="sign-in-btn rounded-3xl py-2 px-8 xl:text-2xl font-semibold bg-white  text-black hover:bg-white/50"
              onClick={handleSignInButton}
            >
              Sign In
            </button>
            <p className="description text-2xl xl:text-3xl font-semibold">
              The best place for all your <br />
              photos, files, notes, mail, <br />
              and more.
            </p>
            <div className="card flex flex-col xl:flex-row gap-10 items-center mx-10 sm:mx-0">
              <div
                className="app-list flex flex-col items-center justify-center border-[1px]// px-6 py-10 rounded-2xl gap-6 shadow-2xl// bg-customBG-dark w-full max-w-[32rem] "
                style={{ boxShadow: "0px 10px 50px rgba(0, 0, 0, 1)" }}
              >
                <img src={appList} alt="app list" className="w-72 lg:w-96" />
                <h2 className="text-start w-full font-semibold text-xl">
                  Easily access apps and data from your iPhone on the web
                </h2>
                <p className="text-start tracking-wide">
                  iCloud is essential for keeping personal information from your
                  devices safe, up to date, and available wherever you are. At
                  iCloud.com, you can access your photos, files, and more from
                  any web browser. Changes you make will sync to your iPhone and
                  other devices, so you’re always up to date.
                </p>
              </div>
              <div
                className="app-list flex flex-col items-center justify-center border-[1px]// px-6 py-10 rounded-2xl gap-6 shadow-2xl// bg-customBG-dark w-full max-w-[32rem]"
                style={{ boxShadow: "0px 10px 50px rgba(0, 0, 0, 1)" }}
              >
                <img src={icloud2tb} alt="app list" className="w-44 lg:w-56" />
                <h2 className="text-start w-full font-semibold text-xl">
                  More storage, plus features to protect your privacy and
                  connect with friends
                </h2>
                <p className="text-start tracking-wide">
                  Upgrade to iCloud+ to get more storage, plan events with Apple
                  Invites, and have peace of mind with privacy features like
                  iCloud Private Relay, Hide My Email, and HomeKit Secure Video.
                  You can even share your subscription with your family. Learn
                  more at{" "}
                  <a
                    href="https://www.apple.com/icloud/"
                    className="text-blue-500 hover:text-blue-700 underline"
                  >
                    apple.com/icloud.
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <LoginForm />
      )}

      <Footer />
    </div>
  );
};

export default Landing;
