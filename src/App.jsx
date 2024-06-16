import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

const App = () => {
  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <Navbar setSidebar={setSidebar}></Navbar>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar}></Home>}></Route>

        <Route
          path="/video/:categoryId/:videoId"
          element={<video></video>}
        ></Route>
      </Routes>
    </div>
  );
};

export default App;
