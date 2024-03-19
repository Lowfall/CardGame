import '../styles/Navbar.css';
import {Link} from 'react-router-dom';
function Navbar() {

    return (
        <div className = "navbar-con" >
            <div className = "navbar">
                <ul className="item-list">
                    <div className='nav-item' id='logo' >
                    <Link to='/home'>
                        <img src='src\assets\Logo_t.png' width="70px" height="70px"></img>
                    </Link>
                    </div>
                    <li className = "nav-item">
                        <Link to='/home'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/games'>Games</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>
            <div className="authbar">
                <Link to='/signin'>Sign in / Sign up</Link>
            </div>
         </div>
    );
        
}

export default Navbar;