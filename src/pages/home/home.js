import React from 'react'
import Search from '../../components/search/search'
import Bestsller from './sections/bestseller/bestsller'
import Carousel from './sections/carousel/carousel'
import Features from './sections/features/features'
import Sales from './sections/sales/sales'
import Special from './sections/special/special'

function Home() {
    return (
        <div className='home w-100' >
            <Carousel />
            <br />
            <br />
            <br />
            <Bestsller />
            <br />
            <br />
            <br />
            <Special />
            <br />
            <br />
            <br />
            <Features />
            <br />
            <br />
            <br />
            <Sales />
            <br />
            <br />
            <br />
            <Search />
        </div>
    )
}

export default Home
