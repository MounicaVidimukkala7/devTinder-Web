import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import store from './store/store'
import { Provider } from 'react-redux'

const Body = () => {
    return (
        <div data-theme="dark">
            <Provider store={store}>
                <Navbar />
                <Outlet />
                <Footer />
            </Provider>
        </div>
    )
}

export default Body
