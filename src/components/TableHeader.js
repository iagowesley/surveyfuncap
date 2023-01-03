import TextField from '@mui/material/TextField';
import './TableHeader.min.css';

const TableHeader = ({formList}) => {
    return (
    <div className='table-header-container'>
        <TextField id="standard-basic" sx={{width:'100%'}} label="Título da survey" variant="standard" />
    </div>
    )
}

export default TableHeader;