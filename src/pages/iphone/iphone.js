import React from 'react';
import Controls from '../../components/controls/controls';
import Offer from '../../components/offer/offer';
import Sidebar from '../../components/sideBar/sidebar';


export default function Iphone() {
  return (
    <div className=''>
        <div className='container'> 
        <div className='row'>
            <div className='col-3'><Sidebar /></div>
            <div className='col-9 mt-4'>
              {/**/}
              <Offer />
              {/**/}
              <Controls />
              {/**/}
              {/**/}
              {/**/}
            </div>
        </div>
        </div>
        
    </div>
  )
}
