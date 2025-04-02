import React from 'react'
import Slayder from '../components/Layout/Slayder'
import GenderCollection from '../components/Products/GenderCollection'
import CategoryCollection from '../components/Products/CategoryCollection'
import NewProduct from '../components/Products/NewProduct'
import BestSeller from '../components/Products/BestSeller'

const Home = () => {
    return (
        <div>
            <Slayder />
            <GenderCollection />
            <CategoryCollection />
            <NewProduct />
            <BestSeller />
        </div>
    )
}

export default Home
