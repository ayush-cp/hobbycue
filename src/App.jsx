import Home from "./Components/Home";
import Footer from "./Components/footer";
import Navbar from "./Components/navbar";
import React from "react";
function App() {
  return (
    <div className="w-full min-h-screen h-max bg-white-400">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
