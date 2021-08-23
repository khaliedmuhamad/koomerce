import React, { useState } from 'react';
import {BsHeart ,BsHeartFill} from 'react-icons/bs'
import {RiShoppingCartFill ,RiShoppingCartLine} from 'react-icons/ri'
import {BsStarFill} from 'react-icons/bs';
import './bsproduct.css'
export default function Bsproduct(props) {
  const {item} = props;

const [loved,setloved] = useState(false);
const [buied,setbuied] = useState(false);
const [on,setOn] = useState(false);

const active = (state)=>  state ? "active" : '';

  const hovering = <div className='overlay'>
            <span className={`btn love ${active(loved)}`} onClick={()=>{setloved(!loved)}}>
            {loved ? <BsHeartFill /> : <BsHeart />}
            </span>
            <span className={`btn buied ${active(buied)}`} onClick={()=>{setbuied(!buied)}}>
            {buied ? <RiShoppingCartFill /> : <RiShoppingCartLine />}
            </span>
        </div>
    

    return (
        <div className='col-3 my-3' onMouseEnter={() => { setOn(!on)}} onMouseLeave={() => { setOn(!on)}} >
            <div className='hovers'>
                {on? hovering : ""}
            </div>
            <div className='bs-product'>
            <div className='row'>
                <img src='https://via.placeholder.com/200' alt='product' className='d-block m-auto' width='80%' />
            </div>
            <hr />
            <div className='row d-block  text-center my-3'>
                <p className='h6 my-2'>{item.name}</p>
                <div className=''>
                {[...Array(item.rate)].map(star => <BsStarFill style={{color:"#FFC600"}}  />)}{[...Array(1)].map(star => <BsStarFill  style={{color:"#C1C8CE"}} />)}
                </div>
                <div className='row justify-content-center my-2'>
                    <div className='col-2 text-danger h6'>${item.price.after}</div>
                    <div className='col-2  h6' style={{color:"#C1C8CE"}}><s>${item.price.before}</s></div>
                </div>
            </div>
            </div>
        </div>
    )
}
