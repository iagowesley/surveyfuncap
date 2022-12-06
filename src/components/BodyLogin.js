import './BodyLogin.min.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";


function BodyLogin() {
    return ( 
        <div className="body-login">
            <div className="caixa-login">
                <h2>Bem vindo</h2>
                <p>Entre na sua conta</p>
                
                <div className="inputs">
                <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '90%' },
                }}
                noValidate
                autoComplete="off"
                >
                <TextField id="outlined-basic" label="Email" variant="outlined" />
                <TextField id="outlined-password-input" label="Senha" type="password"autoComplete="current-password"
                sx={{
                    '& > :not(style)': {mt: 1},
                }}
                />
                </Box>
                <button className='btn-entrar'>Entrar</button>
                <div className="cadastre">
                <p>Não possui conta? <Link to="/cadastro">Cadastre-se</Link></p>
                <Link to="/esqueceusenha">Esqueceu a senha?</Link>
                </div>
                </div>
                
            </div>
        </div>
     );
}

export default BodyLogin;