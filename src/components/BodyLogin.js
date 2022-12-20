import './BodyLogin.min.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { set, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Navbar from "../components/navbar/Navbar";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

import * as yup from "yup"


function BodyLogin({setUserEmail}) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const schema = yup.object({
        email: yup.string().required("Campo obrigatório").email("Email inválido"),
        password: yup.string().required("Campo obrigatório").min(6, "Mínimo 6 caracteres"),
    })

    const { handleSubmit, register, formState: {errors} } = useForm({
        resolver: yupResolver(schema)
    }) 

    const save = (data) => {
        if(data?.email) {
            setEmail(data.email)
        }
        if(data?.password) {
            setPassword(data.password)
        }
        if (!errors?.email?.message && !errors?.password?.message && password && email) {
            setUserEmail(email);
            navigate("/dashboard");
        } 
    }

    const navigate = useNavigate();


    return ( 
        <div>
            <Navbar/>
        <div className="body-login">
            <div className="caixa-login">
            <form onSubmit={handleSubmit(save)}>
                <h2>Bem vindo</h2>
                <p className='entre-na-conta'>Entre na sua conta</p>
                
                <div className="inputs">
                <Box className='box-inputs'>
                <TextField label="Email" {...register("email")} onChange={setEmail}/>
                {errors?.email && <p className='error'>{errors?.email?.message}</p>}
                <TextField style={{marginTop:25}} label="Senha" type="password" {...register("password")} onChange={setPassword}/>
                {errors?.password &&  
                <p className='error'>
                    {errors?.password?.message}
                </p>}
                </Box>
                <button className='btn-entrar' type="submit">Entrar</button>
                <div className="cadastre">
                <p>Não possui conta? <Link to="/cadastro">Cadastre-se</Link></p>
                <Link to="/esqueceusenha">Esqueceu a senha?</Link>
                </div>
                </div>
                
            </form>
                
            </div>
        </div>
        </div>
     );
}

export default BodyLogin;