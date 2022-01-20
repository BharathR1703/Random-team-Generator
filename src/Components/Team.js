import React from 'react';
import './Team.css';
import empty from "./empty.png";

function Team() {
    return (
        <>
        <div className='team-Container'>
            <h1 className='head'>Generate Team:</h1>
            <img className='teamimg' src={empty}/>
        </div>
        </>
    );
}

export default Team
