import React from 'react'
import Link from '../../Links/link';

export default function Navigation(props) {
    const {navi} = props;
    return (
        <div className='col-2'>
        <h6 className='text-capitalize mb-3'>{navi.head}</h6>
        <ul className='list-unstyled'>
            {navi.links.map(link => <li className='text-dark my-1'>
                <Link href='/catigory'  text={link.text} style={{color:'#7E7474'}} />
            </li>)}
            
        </ul>
    </div>
    )
}
