import React from 'react'
import Prodpage from '../prodpage/prodpage';

function Prodspage() {

  const lol =   {
    name: "New Apple iPhone 13",
    price: 15800,
    Discounting:15,//presentage only
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
        <div className='container'>
            <div className='row'>
                <div className='col-12 w-100'><Prodpage pro={lol}/></div>
            </div>
        </div>
    </div>
  )
}

export default Prodspage
