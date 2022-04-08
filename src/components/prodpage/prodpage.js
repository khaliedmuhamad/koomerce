import React , {useState , useEffect} from 'react';
import Rate from '../rate/rate';
import {FiShoppingCart,FiHeart} from "react-icons/fi"
import "./prodpage.css";
import {FaFacebookF , FaTwitter} from "react-icons/fa"



export default function Prodpage(e) {

const url = window.location.href;    


    const[pro,setPro ] =useState(e.pro);
    const [color,setcolor] = useState("gray");
    const [quantity,setQuantity] = useState(1);
    const [inCart,setInCart] = useState(false);
    const [inHeart,setInHeart] = useState(false);
    const [opacity,setOpacity] = useState(0.8);    
    const colorStyle= {
        borderRadius:"50%",
        opacity:0.5,
        outline: "1px solid #ffff",
        outlineOffset:"3px",
    };
    

  return (
    <div className='prodpage'>
        <div className='row'>
            <div className='col-6 prod-img h-100'>
                <div className='img'>
                    <img src={`${pro.images}/${pro.img}/${pro.img}-${color}.jpg`} alt={pro.name} width="100%" />
                </div>
            </div>
            <div className='col-6 prod-info'>
                <div className='title'>{pro.name}</div>
                <div className='rate d-flex mt-2 justify-content-between'>
                    <span className='stars'><Rate rates={pro.rate} /></span>
                    <span className='btn'><a className='stars'>submit a review</a></span>   
                </div>  
                <hr />

                <div className='price'>
                    <span>{(pro.price) - (pro.price * pro.Discounting/100)}</span><span className='ml-2 after'>{(pro.price)}</span>
                </div>
                <div className='info mt-3'>
                    <ul className='list-unstyled text-capitalize'>
                        <li className='d-flex justify-content-between '>Availability: <span className='ml-5'>{pro.quantity > 0 ?"In stock" :"Out Of stock"}</span></li>
                        <li className='d-flex justify-content-between mt-2'>Category: <span className='ml-5'>{'Iphone'}</span></li>
                        <li className='mt-2'>free shipping</li>
                    </ul>
                </div>
                <hr />
                <div className='color mt-4 mb-4'>
                    <ul className='list-unstyled text-capitalize'>
                        <li  className='d-flex justify-content-between'>Select Color:
                            {pro.colors == "undefined " ? "" : pro.colors.map(el =><span className={`btn ${color == el ?"active":""}`} onMouseEnter={(e)=> e.target.style.opacity = 0.8} onMouseLeave={(e)=> e.target.style.opacity = 0.5}  onClick={()=>{setcolor(el)}} style={{"background":el,...colorStyle,outlineColor:el}}></span>) }
                        </li>                
                    </ul>
                </div>
                <hr />
                <div className='d-flex justify-content-between'>
                    <div className='counter background-primary '>
                                        <button className={`btn  ${quantity ==1? "disabled":""}`}  onClick={(e)=> quantity == 1 ? e.preventDefault() : setQuantity( quantity - 1)  }>-</button>                   
    <span className='p-2'>{quantity}</span>
                                            <button className={`btn ${quantity ==pro.quantity? "disabled":""}`}  onClick={(e)=> quantity ==pro.quantity ? e.preventDefault() : setQuantity( quantity + 1)}>+</button>
</div>
                    <div className='addcart'>
                        <button className={`btn ${inCart ?"btn-success" : "bg-light text-primary"} h-100 rounded`} onClick={()=> setInCart(!inCart)}  ><span className='mr-2'><FiShoppingCart /></span>{inCart ?"Added To Cart" : "Add To Cart"}</button>
                        
                    </div>
                    <div className='addfav'>
                        <button className={`btn ${inHeart ? "btn-danger" : "bg-light text-primary"} h-100`} onClick={()=> setInHeart(!inHeart)}  ><span><FiHeart /></span></button>
                        
                    </div>
                    
                </div>  
                {quantity ==pro.quantity ?
                        <div class="alert alert-warning mt-2" role="alert">
                            😥You Canot add more as there are the last quantity!
                        </div>
                        : ""
                        }         
                <hr />

<div className='share row justify-content-between'>
<div class="btn fb-button col-5 btn text-light" data-href={url} data-layout="button" data-size="large"><a target="_blank" href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} class="fb-xfbml-parse-ignore link"><span className='mr-2'><FaFacebookF /></span> Share on Facebook</a></div>
<div className='tw-button col-5 btn'><a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button " data-show-count="false"><span className='mr-2'><FaTwitter /></span> Share on Twitter</a>
</div>
</div>
     
            </div>

        </div>
                  
    </div>
                     )
}
