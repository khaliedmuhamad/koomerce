import React,{ useState ,useEffect } from 'react';
import "./controls.css"
import {AiFillCaretDown} from "react-icons/ai";
import {CgMenuGridO , CgFormatJustify} from "react-icons/cg"
export default function Controls(props) {
  const [TotalItems, setTotalItems] = useState(30);
  const [shownum, setshownum] = useState(12);
  const [showAvialable] = useState([9,12,,14,15,16,17,18,21]);
  const [showItems,setShow] = useState(false);
  const [sorting, setsorting] = useState("name");
  const [typeshow,setTypeShow] = useState("grid")

  useEffect(() => {
    props.getInfo({
      totalItems : TotalItems,
      showNum : shownum,
      showAvailable : showAvialable,
      sorting : sorting,
      typeshow :typeshow
    })
    return () => {
      
    }
  }, [typeshow,sorting,showAvialable,shownum,TotalItems])
  
  

  const Sortingdropdown = <div className='deopdown'>
    <button className='btn btn-transparent border dropdown-toggle ml-2 mt-0 pt-1 mb-0 pb-1' type='button' id='dropdownSortBy' data-toggle="dropdown" aria-expanded="false">
      {sorting}
    </button>
    <div className='dropdown-menu' aria-labelledby='dropdownSortBy'>
      <button className={`dropdown-item ${sorting == "name" ? "active":""}`} onClick={ e => setsorting(e.target.innerText)} >name</button>
      <button className={`dropdown-item ${sorting == "price" ? "active":""}`} onClick={ e => setsorting(e.target.innerText)}>price</button>
      <button className={`dropdown-item ${sorting == "model date" ? "active":""}`} onClick={ e => setsorting(e.target.innerText)}>model date</button>
    </div>
  </div>
const numOfItemsGrid = <div className='numsgrid row w-50 h-100 bg-light rounded border'>{showAvialable.map(e => <span className='col-3 pb-2 btn btn-light  rounded-0' onClick={e =>numHandel(e,showItems)   } >{e}</span> )}</div>
const numHandel = (e,lol) =>{
  setshownum(e.target.innerText)
  setShow(!lol)
}

return (
    <div className='controls row w-100 ml-0 mt-4 rounded-lg'>
      <div className='col-7 d-flex justify-content-between pt-1 pb-1'>
        <div className='items pt-1 '>{TotalItems} <span className=' pt-1 d-inline-block' >Items</span></div>
        <div className='items d-flex pt-1 '> <span className='pt-1' >Sort By</span> {Sortingdropdown}</div>
        <div className='items mt-0 pt-1' onMouseEnter={()=> setShow(!showItems)} onMouseLeave={()=> setShow(!showItems)}><span className=' pt-1 d-inline-block' >Show</span> <button className='btn btn-trasparent border ml-2 mt-0 pt-1 mb-0 pb-1 ' onClick={()=> setShow(!showItems)} >{shownum} <AiFillCaretDown /></button> {showItems ? numOfItemsGrid :""}</div>
      </div>
      <div className='d-flex col-2  offset-3 pt-2 pb-2 justify-content-end'>
        <button className={`btn btn-transparent btn-lg outline-light ml-2 mt-0 pt-0 mb-0 pb-0 ${typeshow == "grid"? "text-primary":""}`} onClick={()=>setTypeShow("grid")} ><CgMenuGridO /></button>
        <button className={`btn btn-transparent btn-lg  ml-2 mt-0 pt-0 mb-0 pb-0 ${typeshow !== "grid"? "text-primary":""}`} onClick={()=>setTypeShow("rows")}><CgFormatJustify /></button>
      </div>

    </div>
  )
}
