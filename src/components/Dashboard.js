import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'
import './Dashboard.min.css'
import { useState } from "react";
import Main from './main/Main'



const Dashboard = ({email}) => {

    const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  }
  const closeSidebar = () => {
    setSidebarOpen(false);
  }

    return (
        <div className="container-dash">
            <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar}/> 
            <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}/>
            <Main email={email}/>
        </div>
    );
} 
export default Dashboard