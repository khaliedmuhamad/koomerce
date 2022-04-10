import React , {useState} from 'react';
import Controls from '../../components/controls/controls';
import Offer from '../../components/offer/offer';
import Expandprod from '../../components/productCard/expanded/expandprod';
import Gridprod from '../../components/productCard/gridprod/gridprod';
import Sidebar from '../../components/sideBar/sidebar';

export default function Iphone() {

  const lol = [
    {
      name: "New Apple iPhone 13",
      price: 15800,
      colors: ["blue", "midnight", "red"],
      size: "128",
      memory: "128",
      operating_system: "IOS 14",
      colour: "Midnight",
      model_year: 2021,
      included: "USB-C ",
      images: "/products/iphones/ph13/ph13-blue.jpg",
      img:'ph13',
      quantity:5,
      Discounting:10,
      rate:3
  
  },
    {
      name: "Apple iPhone 13 Pro Max",
      price: 24598,
      colors: ["gold", "silver", "blue"],
      size: "256",
      memory: "256",
      operating_system: "IOS 14",
      colour: "silver",
      model_year: 2021,
      included: "USB-C", 
      images: "/products/iphones/ph13pro/ph13pro-gold.jpg",
      img:'ph13pro',
      quantity:4,
      Discounting:15,
      rate:4.5
    }
  ];
  const [controls,setContrls] = useState({})

  return (
    <div className=''>
        <div className='container'> 
        <div className='row'>
            <div className='col-3'><Sidebar /></div>
            <div className='col-9 mt-4'>
              {/**/}
              <Offer />
              {/**/}
              <Controls getInfo={d => setContrls(d)} />
              {/**/}
              <div className='products row mt-4 ml-0'>
                  {controls.typeshow === "grid" 
                  ?
                  lol.map(e => <Gridprod data={e}  />
                  )
                  :
                  lol.map(e => <Expandprod data={e} />
                  )
                  }
              </div> 
              {/**/}
              {/**/}
            </div>
        </div>
        </div>
        
    </div>
  )
}
