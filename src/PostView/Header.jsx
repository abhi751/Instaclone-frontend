import { Link } from 'react-router-dom';
import './Header.css';
export default function Header({ setForm }) {
    return (
        <header>
            <Link to='/'>
                <div className="logo">
                    <img src={require("../images/logo1.jpeg")}  alt="logo" />
                </div>
            </Link>
        
            <div className="camera" onClick={ () => setForm(prev => !prev) }>
                <img src="https://img.icons8.com/ios-filled/512/camera.png" alt="camera" />
            </div>
        </header>
    )
}
