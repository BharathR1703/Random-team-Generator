import React from 'react';
import Navbar from '../Components/Navbar';
import Inputsection from '../Components/inputsection';
import Team from '../Components/Team';
import Share from '../Components/share';

function List() {
    return (
        <div>
            <Navbar/>
            <Inputsection/>
            <Team/>
            <Share/>
        </div>
    )
}

export default List
