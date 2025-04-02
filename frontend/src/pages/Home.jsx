import React from 'react'
import Slayder from '../components/Layout/Slayder'
import GenderCollection from '../components/Products/GenderCollection'
import CategoryCollection from '../components/Products/CategoryCollection'
import NewProduct from '../components/Products/NewProduct'

const Home = () => {
    return (
        <div>
            <Slayder />
            <GenderCollection />
            <CategoryCollection />
            <NewProduct />
        </div>
    )
}

export default Home
