import React from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import AlertNotification from "./components/AlertNotification";
import ScreenSizePanel from "./components/ScreenSizePanel";

function App() {
  return (
    <div className="app bg-customBG-dark w-full max-w-full block">
      <Navbar />

      <Landing />

      <AlertNotification />

      <ScreenSizePanel position={"bottom-left"} />
    </div>
  );
}

export default App;
