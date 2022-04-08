import React from 'react';
import "./sidebar.css";
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='categories bgColor mt-4 rounded-lg '>
        <h5 className='sidebar mb-4'>ACCESORIES</h5>
        <ul className='list-unstyled '>
            <li className='d-flex justify-content-between active mb-2'><span>Apple Car</span> <span className='val'>2</span></li>
            <li className='d-flex justify-content-between mb-2'><span>Air port & wireless</span> <span className='val'>58</span></li>
            <li className='d-flex justify-content-between mb-2'><span>Cables & Docks</span> <span className='val'>15</span></li>
            <li className='d-flex justify-content-between mb-2'><span>Cases & Films</span> <span className='val'>15</span></li>
            <li className='d-flex justify-content-between mb-2'><span>Charging Devices</span> <span className='val'>23</span></li>
        </ul>
        </div>
        <div className='price bgColor mt-4 rounded-lg' >
            <label for='price-range'><h5 className=''>PRICE</h5></label>
            <input type='range' min={0} max={50} id='price-range' className='custom-range' />
        </div>
        <div className='color bgColor mt-4 rounded-lg d-flex flex-column  justify-content-center' >
        <h5 className='brand-head w-100'>COLOR</h5>
            <div className='d-flex justify-content-around  text-center'>
            <span className='w-10 h-10  d-inline-block' style={{background:"red",width:"20px",height:"20px",borderRadius:"50%"}} ></span>
            <span className='w-10 h-10  d-inline-block' style={{background:"black",width:"20px",height:"20px",borderRadius:"50%"}}></span>
            <span className='w-10 h-10  d-inline-block' style={{background:"blue",width:"20px",height:"20px",borderRadius:"50%"}}></span>
            </div>
        </div>
        <div className='brand bgColor mt-4 rounded-lg' >
        <h5 className='brand-head'>BRAND</h5>
        <ul className="list-unstyled">
            <li className='d-flex justify-content-between mb-2'><span>Apple</span> <span className='val'>99</span></li>
            <li className='d-flex justify-content-between mb-2 active' ><span>LG</span> <span className='val'>99</span></li>
            <li className='d-flex justify-content-between mb-2'><span>Samsung</span> <span className='val'>99</span></li>
            <li className='d-flex justify-content-between mb-2'><span>Siemens</span> <span className='val'>99</span></li>
        </ul>
        </div>


    </div>
  )
}

export default Sidebar;