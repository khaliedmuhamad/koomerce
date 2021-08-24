import React from 'react'
import { MdPersonOutline } from 'react-icons/md';
import { AiOutlineShopping } from 'react-icons/ai';
import Currency from '../dropdowns/currency';
import Language from '../dropdowns/language';
import { Link } from 'react-router-dom';
function NavUp() {
    return (
        <div className='nav-up' style={{ fontSize: "16px" }}>
            <div className='container'>
                <div className='row'>
                    <div className=' col-md-1'>
                        {/* language dropdown*/}
                        <Language />
                    </div>
                    <div className=' col-md-2 '>
                        {/* Currency dropdown*/}
                        <Currency />
                    </div>
                    {/* profile */}
                    <div className=' col-md-2 ml-auto' >
                        <Link to='/login' className='link'>
                            <MdPersonOutline /> My profile
                        </Link>

                    </div>
                    <div className=' col-md-3'>
                        {/* cart */}
                        <Link to='/cart' className="link"  ><AiOutlineShopping /> 0.00 items {" "} <span className='total'> $ 0.00</span></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavUp
