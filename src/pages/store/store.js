import React from 'react'
import Sidebar from './sections/sidebar/sidebar'

export default function Store() {
    return (
        <div className='store'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 '>
                        <div className='p-2 bg-primary'><Sidebar />
                        </div>
                    </div>
                    <div className='col-8 '><div className='p-2 bg-info'></div></div>


                </div>
            </div>
        </div>
    )
}
