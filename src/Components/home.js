import React from 'react';
import './home.css';
import img from './team.webp';
import product from './productivity.jpg';
import decision from './decision.png';
import service from './service.jpg';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className="home">
            <div className='content1'>
                <div className='text-content1'>
                    <h1 className='heading'>Team Creation made<br />simpler to you</h1>
                    <img className='headingimg' src={img} />
                    <p className='headingp'>Teams will create better work for your ideas <br /> Faster together</p>
                </div>
                <Link to="/List">
                <button className='content1button'> Get started</button>
                </Link>
            </div>
            <div className="container2">
                <div className='content2'>
                    <h2>Random Team Generator</h2>
                    <p>We help you to create teams faster which helps you to reduce your time and make your decisions faster.<br />Working together facilitates idea generation and creativity.</p>
                </div>
            </div>
            <div className='container3'>
                <div className='content3'>
                    <h3 className='content3head'>Faster Decision Making</h3>
                    <p className='content3p'>Making you to effective decisions and rely on faster outcomes.<br />makes you to help your ideas creative and better decision making</p>
                    <img className='content3img' src={decision} />
                </div>
            </div>
            <div className='container4'>
                <div className='content4'>
                    <img className='content4img' src={product} />
                    <div className='text-content4'>
                        <h3>Improves Productivity</h3>
                        <p>Making teams together makes you more productive and motivated toward company goals.<br /> Highly engaged teams showed a 21% increase in profitability.Teamwork helps everyone to <br />communicate better and more often in real-time thus minimizing friction and delays.<br /> All this in turn leads to higher quality output.</p>
                    </div>
                </div>
            </div>
            <div className='container5'>
                <div className='content5'>
                    <h3>Improves Service levels </h3>
                    <p>A unified team reduces interdepartmental bickering <br />and blaming to deliver a superior customer experience. <br />Customers love a unified service experience when it comes<br /> to a quick resolution of their queries and strong team bonds<br /> provide for holistic solutions.</p>
                    <img src={service} />
                </div>
            </div>
            <div className='container6'>
                <div className='content6'>
                    <h2>Improve your productivity</h2>
                    <h3>We'll help you to organize teams</h3>
                    <Link to='/List'>
                    <button>Get Started</button>
                    </Link>
                </div>
            </div>
            <br />
            <br />
        </div>
    )
}

export default Home;
