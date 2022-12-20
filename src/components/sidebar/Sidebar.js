import "./Sidebar.min.css";
import logo from "../../assets/perfil.jfif";
import { Link } from "react-router-dom";
import { color } from "@mui/system";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DashboardIcon from '@mui/icons-material/Dashboard';

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
        <h4>GERENCIAMENTO</h4>
        <div className="sidebar-link active-menu-link">
          <i className="fa fa-plus-circle"></i>
          <a href="#">Dashboard</a>
        </div>
        <div className="sidebar-link ">
          <i className="fa fa-plus-circle"></i>
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Resultados</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <a href="#">N/A</a>
              </Typography> 
             
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="sidebar-link ">
          <i className="fa fa-plus-circle"></i>
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Formulários</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <a href="#">Criar formulários</a>
              </Typography> 
              <Typography style={{'marginTop':10}}>
                <a href="#">Listar formulários</a>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>

       
        <div className="sidebar-link">
          <i className="fa fa-plus-circle"></i>
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Proponentes</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <a href="#">N/A</a>
              </Typography> 
              
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="sidebar-link">
          <i className="fa fa-plus-circle"></i>
          <Accordion className="accordion">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Editais</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <a href="#">Listar editais</a>
              </Typography> 
             
            </AccordionDetails>
          </Accordion>
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
