import React , {useState} from 'react';
import Controls from '../../components/controls/controls';
import Offer from '../../components/offer/offer';
import Expandprod from '../../components/productCard/expanded/expandprod';
import Gridprod from '../../components/productCard/gridprod/gridprod';
import Sidebar from '../../components/sideBar/sidebar';
import dataIphones from "../../api/iphones"
export default function Iphone() {

  dataIphones.length = 3;
  const [controlledArr , setControlledArr] = useState([...dataIphones]);
  const [controls,setContrls] = useState({

  })
console.log(controls);

controls.shownum >= 0 ? dataIphones.length = controls.shownum : dataIphones.length =1 ;
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
                  controlledArr.map(e => <Gridprod data={e}  />
                  )
                  :
                  dataIphones.map(e => <Expandprod data={e} />
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
