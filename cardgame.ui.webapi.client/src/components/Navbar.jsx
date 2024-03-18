import '../styles/Navbar.css';
function Navbar() {

    return (
        <div className = "navbar-con" >
            <div className = "navbar">
                <ul className="item-list">
                    <li className = "nav-item">
                        <a>Home</a>
                    </li>
                    <li className="nav-item">
                        <a>Games</a>
                    </li>
                    <li className="nav-item">
                        <a>About</a>
                    </li>
                </ul>
            </div>
            <div className="authbar">
                <a>Sign in / Sign up</a>
            </div>
         </div>
    );
        
}

export default Navbar;