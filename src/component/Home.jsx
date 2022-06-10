import React from 'react'
import Products from './Products'

function Home() {
    return (
        <div className='hero my-pdp'>
            {/* Hero starts here */}
            <div className="card bg-dark text-white border-0">
                <img src="/assets/bg.jpg" className="card-img" alt="Background" height="550px"/>
                <div className="card-img-overlay d-flex flex-column justify-content-center">
                    <div className="container">
                    <h5 className="card-title display-3 fw-bolder mb-0 text-info">Shoppers Are Stop Here!</h5>
                    <p className="card-text lead fs-2 carrd">Let's Checkout</p>
                    </div>
                </div>
            </div>
            {/* Hero ends here */}

            {/* Using Products component */}
            <Products />
        </div>
    )
}

export default Home
