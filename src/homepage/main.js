import React from 'react'
import Nav from './components/nav'
import Slides from './components/slides'
import SearchBox from './components/search-box'
import Products from './components/products'
import Header from './components/header'
import Contents from './components/contents'
import HomeCard from './components/cards'
import Caro from './components/caro'
import Swipe from './components/swipe'

export default function Home() {
    return (
        <div>
            <Nav />
            <div className="slider-container">
                {/* <Slides /> */}
            </div>
            {/* <div className="slider-container">
             <Header />
            </div> */}
            {/* <Caro /> */}
            <Swipe />
            <SearchBox />
            <div className="p-box product-fluid-container">
                <Products />
            </div>
            <div className="fit-content">
                <Contents />
            </div>
           
        </div>
    )
}
