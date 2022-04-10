import React ,{useState} from 'react';
import Rate from '../../rate/rate';
import "./expandprod.css";
import "../../prodpage/prodpage.css";
import {FiShoppingCart,FiHeart} from "react-icons/fi"
import img from "./ph13-blue.jpg";


export default function Expandprod(props) {
    const [rates] = useState(2)
    const [inCart,setInCart] = useState(false);
    const [inHeart,setInHeart] = useState(false);
    const [data] = useState(props.data)
  return (
    <div className='col-12 mt-4 ml-0 expand'>
        <div className='row'>
            <div className='col-4 border text-center p-2'>
            <img src={data.images} alt={data.name} width="80%"/>
            </div>
            {/**/}
            <div className='col-8'>
                <div className=''>
                <div className='title'>{data.name}</div>
                <div className='rate d-flex mt-2 justify-content-between'>
                    <span className='stars'><Rate rates={data.rate} /></span>
                    <span className='btn'><a className='stars'>submit a review</a></span>   
                </div>  
                <hr />
                <div className='detail'>
                Nunc facilisis sagittis ullamcorper. Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus. Sed et lectus lorem nunc leifend laorevtr istique et congue. Vivamus adipiscin vulputate g nisl ut dolor...
                </div>
                <div className='price mt-3'>
                    <span>{(data.price) - (data.price * data.Discounting/100)}</span><span className='ml-2 after'>{data.price}</span>
                </div>
                <div className='d-flex w-50 justify-content-start'>
                    <div className='addcart'>
                        <button className={`btn ${inCart ?"btn-success" : "intial text-primary"} h-100 rounded`} onClick={()=> setInCart(!inCart)}  ><span className='mr-2'><FiShoppingCart /></span>{inCart ?"Added To Cart" : "Add To Cart"}</button>    
                    </div>
                    <div className='addfav ml-5'>
                        <button className={`btn ${inHeart ? "btn-danger" : "intial text-primary"} h-100 `} onClick={()=> setInHeart(!inHeart)}  ><span><FiHeart /></span></button>
                    </div>
                </div>        
            </div>
                </div>
            </div>
            <hr />
        </div>

  )
}
