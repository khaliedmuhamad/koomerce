import React , {useState} from 'react';
import Bsproduct from '../../../../components/product/bestseller-product/bsproduct';
import './bestseller.css';
import products from '../../../../api/productsData';

export default function Bestsller() {
const [productsarr] = useState(products);
    return (
        <div className='bestseller'>

            <div className='container d-block'>
            <h2 className="display-4 text-center text-dark text-uppercase" >best seller</h2>
         <ul className="nav nav-pills mb-3 justify-content-center nav-dark" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <a className="nav-link active" id="pills-allProducts-tab" data-toggle="pill" href="#pills-allProducts" role="tab" aria-controls="pills-home" aria-selected="true">All</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="pills-Mac-tab" data-toggle="pill" href="#pills-Mac" role="tab" aria-controls="pills-Mac" aria-selected="false">Mac</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="pills-iPhone-tab" data-toggle="pill" href="#pills-iPhone" role="tab" aria-controls="pills-iPhone" aria-selected="false">iPhone</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="pills-iPad-tab" data-toggle="pill" href="#pills-iPad" role="tab" aria-controls="pills-iPad" aria-selected="false">iPad</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="pills-iPod-tab" data-toggle="pill" href="#pills-iPod" role="tab" aria-controls="pills-iPod" aria-selected="false">iPod</a>
  </li>
  <li className="nav-item" role="presentation">
    <a className="nav-link" id="pills-Accessories-tab" data-toggle="pill" href="#pills-Accessories" role="tab" aria-controls="pills-Accessories" aria-selected="false">Accessories</a>
  </li>
</ul>
<div className="tab-content" id="pills-tabContent">
  <div className="tab-pane fade show row active" id="pills-allProducts" role="tabpanel" aria-labelledby="pills-allProducts-tab">
    <div className='row '>  {productsarr.map( (item) => {return <Bsproduct item={item} />})}</div>
  </div>
  <div className="tab-pane fade" id="pills-Mac" role="tabpanel" aria-labelledby="pills-Mac-tab">
          <div className='row '>  {productsarr.filter((el)=> el.type === 'mac').map( (item) => {return <Bsproduct item={item} />})}</div>
  </div>
  <div className="tab-pane fade" id="pills-iPhone" role="tabpanel" aria-labelledby="pills-iPhone-tab">
  <div className='row'>  {productsarr.filter((el)=> el.type === 'iphone').map( (item) => {return <Bsproduct item={item} />})}</div>

  </div>
  <div className="tab-pane fade" id="pills-iPad" role="tabpanel" aria-labelledby="pills-iPad-tab">
  <div className='row'>  {productsarr.filter((el)=> el.type === 'ipad').map( (item) => {return <Bsproduct item={item} />})}</div>

  </div>
  <div className="tab-pane fade" id="pills-iPod" role="tabpanel" aria-labelledby="pills-iPhone-tab">
  <div className='row'>  {productsarr.filter((el)=> el.type === 'ipod').map( (item) => {return <Bsproduct item={item} />})}</div>

  </div>
  <div className="tab-pane fade" id="pills-Accessories" role="tabpanel" aria-labelledby="pills-Accessories-tab">
  <div className='row'>  {productsarr.filter((el)=> el.type === 'accessories').map( (item) => {return <Bsproduct item={item} />})}</div>

  </div>

</div>
</div>
        </div>
        
    )
}
