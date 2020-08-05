import React from 'react'
import Nav from './components/nav'
import Slides from './components/slides'
import SearchBox from './components/search-box'
import Products from './components/products'

export default function Home() {
    return (
        <div>
            <Nav />
            <div className="slider-container">
                <Slides />
            </div>
            <SearchBox />
            <Products />
        </div>
    )
}
