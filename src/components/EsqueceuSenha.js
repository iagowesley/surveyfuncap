import "./EsqueceuSenha.min.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import Navbar from "../components/navbar/Navbar";


function BodyCadastro() {

  const schema = yup.object({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
})

const { handleSubmit, register, formState: {errors} } = useForm({
    resolver: yupResolver(schema)
}) 

const save = (data) => {
    console.log(data)
}

  return (
    <div>
    <Navbar/>
    <div className="body-login">
      <div className="caixa-login">
        <form onSubmit={handleSubmit(save)}>
        <h2>Etapa 1 - Dados</h2>
        <p>Recupere sua conta</p>

        <div className="inputs">
          <Box className='box-inputs'>
          <TextField label="Email" {...register("email")}/>
          {errors?.email && <p className='error'>{errors?.email?.message}</p>}

          </Box>
          <button className="btn-recuperar" type="submit">RECUPERAR SENHA</button>
          <div className="cadastre">
            <p>
              Não possui conta? <Link to="/cadastro">Cadastre-se</Link>
            </p>
          </div>
        </div>
        </form>
      </div>
    </div>
    </div>
  );
}

export default BodyCadastro;
