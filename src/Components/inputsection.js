import React from 'react';
import './inputsection.css'
import {BsFillPlusCircleFill} from 'react-icons/bs';

function Inputsection() {
    return (
        <>
        <div className='Container'>
            <div className="content-container">
                <form>
                    <input className='input' name="name" placeholder='Name'></input>
                    <BsFillPlusCircleFill className='buttonadd' color='#0E4DA4' size={40}/>
                </form>
                <div className='list'>
                </div>
                <div className='button'>
                    <button className='buttongenerate'>
                        Generate
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}

export default Inputsection;
