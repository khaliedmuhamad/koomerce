import React from 'react'
import Prodspage from '../../components/prodspage/prodspage'
import Sidebar from '../../components/sideBar/sidebar'


export default function Store() {
    return (
        <div className='store'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 '>
                        <div className=''>
                        <div className=' '><div className='p-2'><Sidebar /></div></div>
                        </div>
                    </div>
                    <div className='col-8 '><div className='p-2 mt-4'><Prodspage /></div></div>
                </div>
            </div>
        </div>
    )
}
