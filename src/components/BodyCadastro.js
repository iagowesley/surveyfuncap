import './BodyLogin.min.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";


function BodyCadastro() {
    return ( 
        <div className="body-login">
            <div className="caixa-login">
                <h2>Etapa 1 - Dados</h2>
                <p>cadastre sua conta</p>
                
                <div className="inputs">
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '90%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="outlined-basic" label="Nome do proponente" variant="outlined" />
                <TextField id="outlined-basic" label="Nome da empresa" variant="outlined" />
                <TextField id="outlined-basic" label="CNPJ" variant="outlined" />
    
                </Box>
                <button className='btn-entrar'>AVANÇAR</button>
                <div className="cadastre">
                <p>Já possui uma conta? <Link to="/login">Login</Link></p>

                </div>

                </div>
                
            </div>
        </div>
     );
}

export default BodyCadastro;