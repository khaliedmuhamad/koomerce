import React from 'react'
import Link from '../../../../components/Links/link'
import  './special.css';
export default function Special() {
    return (
        <div className='special '>
            <div className='container'>
                <div className='row justify-content-space-between align-items-center'>
                    <div className='col-5 content'>
                        <p className='h4 my-3 text-light'>iphone 6 plus</p>
                        <p className='h6 my-2 text-light'>Performance and design. Taken right to the edge.</p>
                        <Link href="#" text='shop now' class='text-primary btn btn-light my-5' />
                    </div>
                    <div className='col-5'>
                        <img src='https://via.placeholder.com/720' alt='sds' width='100%' />
                    </div>

                </div>
            </div>
        </div>
    )
}
