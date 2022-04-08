import React from 'react'
import Prodspage from '../../components/prodspage/prodspage'


export default function Store() {
    return (
        <div className='store'>
            <div className='container'>
                <div className='row'>
                    <div className='col-4 '>
                        <div className='p-2 bg-primary'>
                        </div>
                    </div>
                    <div className='col-8 '><div className='p-2'><Prodspage /></div></div>

                </div>
            </div>
        </div>
    )
}
