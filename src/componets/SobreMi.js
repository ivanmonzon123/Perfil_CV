import React from 'react';
import '../styles/cont-sobremi.css'

const SobreMi = () => {
    return (
        <div className='cont-main-sobremi row'>
            <img className='col-md-5 cont-img-fotaso' src={'https://firebasestorage.googleapis.com/v0/b/proyecto-cv-86b2d.appspot.com/o/fotaso.jpg?alt=media&token=e19fe880-dd37-47b0-9f47-aff540ce0c56'}/>
            <div className='col-md-7 cont-second-sobremi'>
                <h2>Sobre mi</h2>
                <h1>Hola soy <label>Ivan Monzon</label>, <h4 style={{display: 'inline-block'}}>Desarrollador Web Fullstack</h4> </h1>
                <p style={{color: 'black'}}>Me encanta el mundo de la tecnologia y mas del desarrollo web, durante mucho tiempo fui batallando con mis temores de propbar nuevas cosas pero ahora me gusta tomar esas oportunidades.</p>
                <button >ir a Portafolio</button>
            </div>
            
        </div>
    );
}

export default SobreMi;
