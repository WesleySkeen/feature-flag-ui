import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from '../App/App.tsx'
import Header from '../Header/Header.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Header/>
        <App/>
    </StrictMode>,
)
