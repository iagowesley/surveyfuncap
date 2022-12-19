import React from "react";
import Rotas from "./routes/Rotas";
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";

import { useState } from "react";
import './App.css';

const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  }
  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div className="container">
      {/* <Header/> */}
      <Navbar />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
      <Rotas/>
    </div>
  );
};

export default App;
