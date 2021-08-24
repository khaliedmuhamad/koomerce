import React, { useState } from 'react';
import About from './parts/about';
import Contact from './parts/contact';
import Follow from './parts/follow';
import navigationFooterData from '../../api/navigationFooterData';
import './footer.css';
import Navigation from './parts/navigation';

export default function Footer() {
    const initialParts = [
        <About />, <Follow />, <Contact />
    ]
    const [parts] = useState(initialParts)
    return (
        <div className='footer my-4'>
            <div className='container d-block'>
                <div className='aboutUs my-4'>
                    <div className='row'>
                        {parts.map((part , e) => <div key={e} className='col-4' >
                            <div className="px-4">{part}</div>
                        </div>)}
                    </div>
                </div>
                <div className='navigation my-4'>
                    <div className='row'>
                        {navigationFooterData.map((el)=> <Navigation navi={el} />)}
                    </div>
                </div>

            </div></div>
    )
}
