import './Cadastro.min.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import Navbar from "../components/navbar/Navbar";

import * as yup from "yup"


function BodyCadastro() {

    const schema = yup.object({
        name_prop: yup.string().required("Campo obrigatório"),
        name_company: yup.string().required("Campo obrigatório"),
        cnpj: yup.string().required("Campo obrigatório").min(6, "Mínimo 10 caracteres")
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
                <p>cadastre sua conta</p>
                
                <div className="inputs">
                <Box className='box-inputs'>
                <TextField label="Nome do proponente" {...register("name_prop")}/>
                {errors?.name_prop && <p className='error'>{errors?.name_prop?.message}</p>}
                <TextField style={{marginTop:25}} label="Nome da empresa/instituição" {...register("name_company")}/>
                {errors?.name_company && <p className='error'>{errors?.name_company?.message}</p>}
                <TextField style={{marginTop:25}} label="CPF/CNPJ" {...register("cnpj")}/>
                {errors?.cnpj && <p className='error'>{errors?.cnpj?.message}</p>}

    
                </Box>
                <button className='btn-avancar' type="submit">AVANÇAR</button>
                <div className="cadastre">
                <p>Já possui uma conta? <Link to="/login">Login</Link></p>

                </div>

                </div>
                </form>
            </div>
        </div>
        </div>
     );
}

export default BodyCadastro;