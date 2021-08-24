import React, { useEffect, useState } from 'react'
import { BsStarFill } from 'react-icons/bs';

export default function Slproduct(props) {
    const { product } = props;
    useEffect(() => {
        const rat = product.rate;
        return unstared(rat);
    }, [product.rate]);
    const [unstar, setUnstar] = useState(0)
    const unstared = (ir) => {
        setUnstar(5 - ir)
    }
    return (
        <div className='col-4'>
            <div className='row'>
                <div className='col-6'>
                    <img className='' src='https://via.placeholder.com/120' alt='prrr' width="100%" />
                </div>
                <div className='col-6'>
                    <div className='product-name h4'>{product.name}</div>
                    <div className='product-rate'>
                        {[...Array(product.rate)].map(star => <BsStarFill style={{ color: "#FFC600" }} />)}{[...Array(unstar)].map(star => <BsStarFill style={{ color: "#C1C8CE" }} />)}
                    </div>
                    <div className='product-price row align-content-space-between my-2'>
                        <div className='col-6 text-danger h6'>${product.price.after}</div>
                        <div className='col-6  h6' style={{ color: "#C1C8CE" }}><s>${product.price.before}</s></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
