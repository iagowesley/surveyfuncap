import "./Sidebar.min.css";
import logo from "../../assets/perfil.jfif";
import { Link } from "react-router-dom";
import { color } from "@mui/system";


const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-img">
          <img src={logo} alt="logo" />
          <h1>Iago Wesley </h1>
          <i class="fa-solid fa-arrow-left"></i>
          <i
            onClick={() => closeSidebar()}
            className="fa fa-times"
            id="sidebarIcon"
            area-hidden="true"
          ></i>
        </div>
      </div>
      <div className="sidebar-menu">
      <h4>Gerenciamento</h4>
        <div className="sidebar-link active-menu-link">
          <i className="fa fa-plus-circle"></i>
          <a href="#">Dashboard</a>
        </div>

        <div className="sidebar-link">
          <i className="fa fa-plus-circle"></i>
          <a href="#">Resultados</a>
        </div>

        <div className="sidebar-link">
          <i className="fa fa-plus-circle"></i>
          <a href="#">Formulários</a>
        </div>
        <div className="sidebar-link">
          <i className="fa fa-plus-circle"></i>
          <a href="#">Proponentes</a>
        </div>
        <div className="sidebar-link">
          <i className="fa fa-plus-circle"></i>
          <a href="#">Editais</a>
        </div>
        <div className="sidebar-link">
          <i className="fa fa-plus-circle"></i>
          <a href="#">Ajuda</a>
        </div>
        <div className="sidebar-logout">
          <i className="fa fa-plus-circle"></i>
          
          <Link to="/login">Logout</Link>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
