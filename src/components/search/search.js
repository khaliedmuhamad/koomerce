import React , {useState}from 'react'

export default function Search() {
const [val, setVal] = useState('')

    return (
        <div className='container d-block'>
      <form className='mx-auto w-50 shadow-lg'>
          <div className='input-group mb-1'>
          <input className='form-control' id='search-product' type='text' value={val} onChange={ e=>setVal(e.target.value)} placeholder='search'   />
          <div className='input-group-prepend'>
          <button type='submit' className='btn btn-primary' disabled={!val} onClick={ e=> e.preventDefault()} aria-describedby="search-product">search</button>
        </div>
        </div>
      </form>
      </div>
    )
}
