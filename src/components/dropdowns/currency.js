import React, { useState } from 'react'

function Currency() {

    const [data, setData] = useState('US Dollar');

    const activation = (e) => {
        setData(e.target.dataset.name)
        console.log(e.target.dataset.name)

    }
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
            <button className='btn btn-transparent dropdown-toggle p-0' type="button" id='currency' data-toggle="dropdown" aria-haspopup={!togglers} aria-expanded={togglers}>
                {!data ? "US Dollar" : data}
            </button>
            <div className={`dropdown-menu ${show}`} aria-labelledby='currency'>
                <button type="button" className='dropdown-item' data-name='US Dollar' onClick={activation} >US Dollar</button>
                <button type="button" className='dropdown-item' data-name='EUR Euro' onClick={activation} >EUR Euro</button>
                <button type="button" className='dropdown-item' data-name='CNY Chinese' onClick={activation} >CNY Chinese</button>
                <button type="button" className='dropdown-item' data-name='Egyptain pound' onClick={activation} >Egyptain pound</button>
            </div>
        </div>
    )
}

export default Currency
