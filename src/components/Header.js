import React from 'react'

const Home = (props) => {

    return (
        <>
            

            <div>
                <div className='d-flex justify-content-end mx-3 my-3'>
                    <i className="fa-solid fa-cart-shopping" >cart
                        <span className='mx-2'>{props.Data.cartItems.length}</span>
                    </i></div>
            </div>

        </>
    )
}

export default Home