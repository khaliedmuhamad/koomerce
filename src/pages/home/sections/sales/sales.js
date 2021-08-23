import React,{useState} from 'react';
import products from '../../../../api/productsData';
import Slproduct from '../../../../components/product/slproduct/slproduct';
import Search from '../../../../components/search/search';

export default function Sales() {
    const [productsarr, setProductsarr] = useState(products);
    productsarr.length = 3;
    return (
        <div className='sales my-5'>
            <div className='container d-block'>
            <p className='display-4 text-center my-4'>FEATURED PRODUCTS</p>
            <div className='row my-5'>
                {productsarr.map(product => <Slproduct product={product} />)}
                
            </div>
            
            </div>
        </div>
    )
}
