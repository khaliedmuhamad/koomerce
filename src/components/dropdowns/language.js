import React, { useState } from 'react'

function Language() {

    const [data, setData] = useState('En');

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
            <button className='btn btn-transparent dropdown-toggle p-0' type="button" id='language' data-toggle="dropdown" aria-haspopup={!togglers} aria-expanded={togglers}>
                {!data ? "lang" : data}
            </button>
            <div className={`dropdown-menu ${show}`} aria-labelledby='language'>
                <button type="button" className='dropdown-item' data-name='En' onClick={activation} >En</button>
                <button type="button" className='dropdown-item' data-name='Gr' onClick={activation} >Gr</button>
                <button type="button" className='dropdown-item' data-name='Fr' onClick={activation} >fr</button>
                <button type="button" className='dropdown-item' data-name='Ar' onClick={activation} >Ar</button>
            </div>
        </div>
    )
}

export default Language
