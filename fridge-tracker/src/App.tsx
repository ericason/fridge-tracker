import React from "react";
import "./App.css";
import Home from "./components/Layout/Home";
import Navbar from "./components/Layout/Navbar";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Navbar />
        <div className="container">
          <Home />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
