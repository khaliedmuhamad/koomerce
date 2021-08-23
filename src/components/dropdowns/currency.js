import React, { useState } from 'react'

function Currency() {

    const [data,setData] = useState('US Dollar');

    const activation=  (e) =>{
      setData(e.target.dataset.name)
      console.log(e.target.dataset.name)
  
    }

    return (
        <div className='dropdown'>
        <button className='btn btn-transparent dropdown-toggle p-0' type="button" id='language' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {!data ? "US Dollar" :data}
        </button>
        <div className='dropdown-menu' aria-labelledby='language'>
            <button  type="button" className='dropdown-item' data-name='US Dollar'onClick={activation} >US Dollar</button>
            <button  type="button" className='dropdown-item' data-name='EUR Euro'onClick={activation} >EUR Euro</button>
            <button  type="button" className='dropdown-item' data-name='CNY Chinese'onClick={activation} >CNY Chinese</button>
            <button  type="button" className='dropdown-item' data-name='Egyptain pound'onClick={activation} >Egyptain pound</button>
        </div>
    </div>
    )
}

export default Currency
