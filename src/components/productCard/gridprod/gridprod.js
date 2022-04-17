import React ,{useState ,useEffect} from 'react';
import Rate from '../../rate/rate';
import "./gridprod.css";

export default function Gridprod(props) {
    const [data] = useState(props.data)


  return (
    <div className='col-4 mt-4 ' style={{minHeight:"400px"}}> 
        <div className='pr-0 pt-3 pb-2  mb-1 rounded-sm ' style={{border:"solid 2px #46494b15"}}>
        <div className='up d-flex justify-content-center align-center ' style={{height:"252px"}}>
            <div className='prod-img  text-center' >
                <img src={data.images} alt={data.name} height="100%" />
            </div>
        </div>
        <hr/>
        <div className='down text-center h-100'>
            <span className='product-name d-block text-dark'>{data.name}</span>
            <span className='product-rate mt-4 d-block'> {<Rate rates={data.rate} />} </span>
            <span className='product-price d-inline-block price'>{data.price}</span><span className='product-price d-inline-block price after ml-4'>{(data.price) - (data.price * data.Discounting/100)}</span>
        </div>
        </div>
    </div>
  )
}
