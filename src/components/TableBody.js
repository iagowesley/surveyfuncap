import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import './TableBody.min.css';



const TableBody = ({formList}) => {
    return (
    <div className='table-body-container'>
        <TextField id="standard-basic" sx={{width:'100%'}} label="Descrição da pergunta" variant="standard" />
        <div className='table-body-select'>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select" 
          sx={{width:'100%', borderBottom: '1px solid gray'
        }}
          label="Age"
        >
          <MenuItem value={10}>Não se aplica</MenuItem>
        </Select>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          sx={{width:'100%', borderBottom: '1px solid gray'}}
          label="Age"
        >
          <MenuItem value={10}>Resposta aberta</MenuItem>
          <MenuItem value={20}>Resposta acertiva</MenuItem>
          <MenuItem value={30}>Anexo</MenuItem>
        </Select>
        </div>
        
        <TextField id="standard-basic" sx={{width:'100%'}} label="A frase será digitada aqui" variant="standard" />

    </div>
    )
}

export default TableBody;