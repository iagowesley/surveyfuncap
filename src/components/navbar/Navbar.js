import './Navbar.min.css'
import Logo from '../../assets/Logo.svg'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>SURVEY FUNCAP</h1>
            <img src={Logo} alt="" />
        </nav>
        
     );
}

export default Navbar;