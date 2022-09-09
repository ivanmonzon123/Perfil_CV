import React from 'react';
import '../styles/LandingPage.css'
import { Button } from 'react-bootstrap'
const LandingPage = () => {
    return (
        <div className='cont-landingpage'>
            <h2>Bienvenidos</h2>
            <h1>Soy <label>Ivan Monzon</label>, Desarrollador Web Fullstack </h1>
            <p style={{color: 'white'}}>"Si decides hacer solo las cosas que sabes que van a funcionar, dejarás un montón de oportunidades sin probar"</p>
            <button className='buton-welcome'>ir a Portafolio</button>
        </div>
       
    );
}

export default LandingPage;
