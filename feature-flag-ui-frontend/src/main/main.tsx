import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// import Header from '../Header/Header.tsx'
import SideNav from "../SideNav/SideNav.tsx";
import App from '../App/App.tsx'
import FeatureFlags from '../App/FeatureFlags/FeatureFlags.tsx'


import './index.css'


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Router>
            {/*<Header />*/}
            <SideNav />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/feature-flags" element={<FeatureFlags />} />
            </Routes>
        </Router>
    </StrictMode>,
)
