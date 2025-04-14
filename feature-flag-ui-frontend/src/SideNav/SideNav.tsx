import { Link } from 'react-router-dom';
import './SideNav.css';

function SideNav() {
    return (
        <nav className="side-nav">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/feature-flags">Feature Flags</Link></li>
                <li><Link to="/settings">Settings</Link></li>
            </ul>
        </nav>
    );
}

export default SideNav;