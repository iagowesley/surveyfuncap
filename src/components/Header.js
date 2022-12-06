import './Header.min.css'
import Logo from '../imgs/Logo.svg'

function Header() {
    return ( 
        <div className="header">
            <h1>SURVEY FUNCAP</h1>
            <img src={Logo} alt="" />
        </div>
     );
}

export default Header;