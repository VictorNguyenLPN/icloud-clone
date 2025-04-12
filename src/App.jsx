import React from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import ScreenSizePanel from "./components/ScreenSizePanel";

function App() {
  return (
    <div className="app bg-gray-100 w-full max-w-full block overflow-x-hidden">
      <Navbar />

      <Landing />

      <Footer />

      {/* <ScreenSizePanel position={"top-left"} /> */}
    </div>
  );
}

export default App;
