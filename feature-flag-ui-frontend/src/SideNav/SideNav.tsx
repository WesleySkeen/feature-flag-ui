import { Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import './SideNav.css';

function SideNav() {
    return (
        <nav className="side-nav">
            <ul>
                <li>
                    <i className="fas fa-flag icon"></i>
                    <Link to="/feature-flags" >Feature Flags</Link>
                </li>
            </ul>
        </nav>
    );
}

export default SideNav;