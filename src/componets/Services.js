import React from 'react';
import ServiceComp from './ServiceComp';
const Services = () => {
    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'#e7e7e7'}}>
            <h2 style={{color:'black',margin:'2rem 0'}}>MIS SERVICIOS</h2>
            <div className='row w-75 justify-content-evenly'>
                <ServiceComp 
                Servicio='Gestion de base de datos'
                position='0'/>
                <ServiceComp 
                Servicio='Inteligencia Artificial'
                position='2'
                />
                <ServiceComp 
                Servicio='Desarrollo Web'
                position='1'
                />
                
                <ServiceComp 
                Servicio='Gestion de base de datos'
                position='1'/>
                <ServiceComp 
                Servicio='Inteligencia Artificial'
                position='2'
                />
                <ServiceComp 
                Servicio='Desarrollo Web'
                position='0'
                />
                
            </div>
        </div>
    );
}

export default Services;
