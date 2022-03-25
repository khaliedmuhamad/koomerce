import React , {useState} from 'react';
import Rate from '../rate/rate';
import {FiShoppingCart,FiHeart} from "react-icons/fi"

export default function Prodpage() {
const url = window.location.href;    

    const [color,setcolor] = useState("gray");
    const [quantity,setQuantity] = useState(1);
    const [inCart,setInCart] = useState(false);
    const [inHeart,setInHeart] = useState(false);
    const pro =   {
        name: "New Apple iPhone 13",
        price: 15800,
        colors: ["blue", "gray", "red"],
        size: "128",
        memory: "128",
        operating_system: "IOS 14",
        colour: "Midnight",
        model_year: 2021,
        included: "USB-C ",
        images: "/products/iphones",
        img:'ph13',
        rate:1.5,
        quantity:10
    };
    
  return (
    <div className='prodpage'>
        <div className='row'>
            <div className='col-6 prod-img h-100'>
                <div className='row'>
                    <img src={`${pro.images}/${pro.img}/${pro.img}-${color}.jpg`} alt="lol" />
                </div>
            </div>
            <div className='col-6 prod-info'>
                <div className='title'><h2 className='name'>{pro.name}</h2></div>
                <div className='rate d-flex'>
                    <span className='stars'><Rate rates={pro.rate} /></span>
                    <span className='stars'><a className='stars'>submit a review</a></span>   
                </div>  
                <hr />

                <div className='price'>
                    <h2 className='text-danger'>{pro.price}</h2>
                </div>
                <div className='info'>
                    <ul className=''>
                        <li className=''>Availability: <span>{pro.quantity > 0 ?"In stock" :"Out Of stock"}</span></li>
                        <li className=''>Category: <span>{'Accessories'}</span></li>
                        <li className=''>free shipping</li>
                    </ul>
                </div>
                <hr />
                <div className=''>
                    <ul className=''>
                        <li className=''>Select Color:
                            {pro.colors.map(el =><div className='btn btn-rounded' onClick={()=>{setcolor(el)}} style={{"background":el,"borderRadius":"50%"}}></div>) }
                        </li>
                
                    </ul>
                </div>
                <hr />
                <div className=''>
                    <div className='counter background-primary '>
                        <button className={`btn btn-secondary  ${quantity ==pro.quantity? "disabled":""}`}  onClick={(e)=> quantity ==pro.quantity ? e.preventDefault() : setQuantity( quantity + 1)}>+</button>
                        <span className='p-2'>{quantity}</span>
                    <button className={`btn btn-secondary  ${quantity ==1? "disabled":""}`}  onClick={(e)=> quantity == 1 ? e.preventDefault() : setQuantity( quantity - 1)  }>-</button>                   
                    </div>
                    <div className='addcart'>
                        <button className={`btn ${inCart ?"btn-success" : "btn-primary"}`} onClick={()=> setInCart(!inCart)}  ><span><FiShoppingCart /></span>{inCart ?"Added To Cart" : "Add To Cart"}</button>
                        
                    </div>
                    <div className='addfav'>
                        <button className={`btn ${inHeart ? "btn-danger" : "btn-light"}`} onClick={()=> setInHeart(!inHeart)}  ><span><FiHeart /></span></button>
                        
                    </div>
                    {quantity ==pro.quantity ?
                        <div class="alert alert-warning" role="alert">
                            😥You Canot add more as there are the last quantity!
                        </div>
                        : ""
                        }
                </div>           
                <hr />

<div className='share'>
<div class="fb-share-button" data-href={url} data-layout="button" data-size="large"><a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} class="fb-xfbml-parse-ignore">Share</a></div>
</div>
     
            </div>

        </div>
    </div>
  )
}
