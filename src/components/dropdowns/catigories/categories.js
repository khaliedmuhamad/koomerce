import React, { useState } from 'react'
import './categories.css'
export default function Catigories() {
    const init = [
        [
            { to: "", name: "AirPort & Wireless" },
            { to: "", name: "AppleCare" },
            { to: "", name: "Bags, Shells & Sleeves" },
            { to: "", name: "Business & Security" },
            { to: "", name: "Cables & Docks" }
        ],
        [
            { to: "", name: "Cameras & Video" },
            { to: "", name: "Car & Travel" },
            { to: "", name: "Cases & Films" }

        ],
        [
            { to: "", name: "Charging Devices" },
            { to: "", name: "Connected Home" },
            { to: "", name: "Device Care" },
            { to: "", name: "Display & Graphic" },
            { to: "", name: "Fitness & Sport " }
        ],
        [
            { to: "", name: "Headphones" },
            { to: "", name: "HealhKit" }
        ],
        [
            { to: "", name: "Mice & Keyboards" },
            { to: "", name: "Connected Home" },
            { to: "", name: "Music Creation" },
            { to: "", name: "Networking & Server" }
        ]
    ];

    const [catigoriesItems] = useState(init);
    const [togglers, setTogglers] = useState(false);
    const [show, setShow] = useState('');
    const mouseOn = () => {
        setTogglers(!togglers);
        setShow('show');
    };
    const mouseOut = () => {
        setTogglers(!togglers);
        setShow('');
    };

    return (
        <div className={`dropdown ${show}`} onMouseEnter={mouseOn} onMouseLeave={mouseOut}>
            <button className='btn btn-transparent dropdown-toggle p-0' type="button" id='catigories' data-toggle="dropdown" aria-haspopup={!togglers} aria-expanded={togglers}>
                <span className={`head-cate ${show}`}>Categories 🔻</span>
            </button>
            <div className={`dropdown-menu catigory ${show}`} aria-labelledby='catigories'>
                <div className='row'>
                    {catigoriesItems.map((catigory , a) => <div key={a} className='col-2'>
                        <ul className='list-unstyled'>
                            {catigory.map((item , b )=> <li key={b} className=''> <button type="button" className='dropdown-item'>
                                {item.name}
                            </button></li>)}
                        </ul>
                    </div>)}

                </div>

            </div>
        </div>

    )
}
