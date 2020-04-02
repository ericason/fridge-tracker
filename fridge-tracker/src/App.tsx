import React from "react";
import Home from "./components/Layout/Home";
import Navbar from "./components/Layout/Navbar";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <GlobalProvider>
      <div>
        <Navbar />
        <div className="container">
          <Router>
            <Route exact={true} path="/" component={Home} />
            {/* <Route exact={true} path="/login" component={<div>hi</div>} /> */}

            {/* <Home /> */}
          </Router>
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
