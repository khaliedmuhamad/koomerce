import React, { useState } from 'react'

function Language() {

    const [data,setData] = useState('En');

    const activation=  (e) =>{
      setData(e.target.dataset.name)
      console.log(e.target.dataset.name)
  
    }

    return (
        <div className='dropdown'>
        <button className='btn btn-transparent dropdown-toggle p-0' type="button" id='language' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {!data ? "lang" :data}
        </button>
        <div className='dropdown-menu' aria-labelledby='language'>
            <button  type="button" className='dropdown-item' data-name='En'onClick={activation} >En</button>
            <button  type="button" className='dropdown-item' data-name='Gr'onClick={activation} >Gr</button>
            <button  type="button" className='dropdown-item' data-name='Fr'onClick={activation} >fr</button>
            <button  type="button" className='dropdown-item' data-name='Ar'onClick={activation} >Ar</button>
        </div>
    </div>
    )
}

export default Language
