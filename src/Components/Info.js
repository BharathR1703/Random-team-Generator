import React from 'react'
import './Info.css';
import about from './about.png';
import abhi from './abhi.png';
import harsha from './harsha.png';
import bharath from './bharath.png';
function Info(){
  return(
    <>
    <div className='Info'>
        <div className="info-Container">
          <div className=' imgcontent1'>
            <img src={about}/>
          </div>
          <div className='infocontent2'>
            <h1>Meet the team:</h1>
            <p>Passionate to develop new technologyies</p>
          </div>
          <div className='Cards'>
          <div className='cards1'>
              <img src={abhi}/>
              <h3>Abhishek AN</h3>
              <h4>Backend</h4>
          </div>
          <div className='cards2'>
              <img />
              <h3>Abhinav</h3>
              <h4>Design</h4>
          </div>
          <div className='cards1'>
              <img src={bharath}/>
              <h3>Abhishek AN</h3>
              <h4>Backend</h4>
          </div>
          <div className='cards2'>
              <img src={harsha}/>
              <h3>Harsha</h3>
              <h4>Frontend</h4>
          </div>
          </div>
        </div>
    </div>
    </>
    );
}

export default  Info;
