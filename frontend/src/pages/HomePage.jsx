import React from 'react'
import Header from '../components/Common/Header'
import Footer from '../components/Common/Footer'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
    return (
        <>
            {/* Header */}
            <Header />
            {/* Main */}
            <main>
                <Outlet />
            </main>
            {/* Footer */}
            <Footer />
        </>
    )
}

export default HomePage
