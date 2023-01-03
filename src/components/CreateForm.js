import TextField from "@mui/material/TextField";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Button from "@mui/material/Button";
import { useState } from "react";
import "./CreateForm.min.css";

const CreateForm = ({ formList }) => {
  const [count, setCount] = useState(0);
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [text, setText] = useState("");
  const [asks, setAsks] = useState([]);

  const handleAsk = () => {
    const askList = asks;
    askList.push({ description, type, category, text });
    setAsks(askList)
    setCount(count+1)
    console.log(asks)
  };

  const removeAsk = () => {
    const askList = asks;
    askList.pop()
    setAsks(askList)
    setCount(count+1)
    console.log(asks)
  };
  return (
    <div className="container-create">
      <Navbar />
      <Sidebar />
      <div className="table-container">
        <div className="table-header">
          <TableHeader />
        </div>
        <div className="table-body">
            {asks.map(()=><TableBody/>)}
          <div className="create-form-buttons">
            <Button variant="contained" sx={{ height: "100%", width: "100%" }}>
              Enviar
            </Button>
            <Button onClick={handleAsk} variant="outlined" sx={{ height: "100%", width: "100%" }}>
              Nova pergunta
            </Button>
            <Button onClick={removeAsk} variant="outlined" sx={{ height: "100%", width: "100%" }}>
              Remover
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
