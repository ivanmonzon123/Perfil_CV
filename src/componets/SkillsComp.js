import React from 'react';
import '../styles/SkillsComp.css'
import { ProgressBar } from 'react-bootstrap';

export default function SkillsComp ({area,level,progreso}) {
    return (
        <div className='pt-3 pb-3'>
            
            <div className='name-skill' >
                <h3 style={{color:'white'}}>{area}</h3>
                <h4 style={{color:'white'}}>{level}%</h4>
            </div>
            <ProgressBar variant="danger" now={progreso} />
        </div>
    );
}
