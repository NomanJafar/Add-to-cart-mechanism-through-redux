import React from 'react'

const Home = (props) => {
    console.log("home props", props.Data.cartItems.length);
    const CartHandler = () => {
        props.addToCartHandler({ price: "5000", productname: "phone" });
    }
    return (
        <>
            <div>Home component</div>

            <div>
                <div className='d-flex justify-content-end mx-3 my-3'>
                    <i className="fa-solid fa-cart-shopping" >cart
                        <span className='mx-2'>{props.Data.cartItems.length}</span>
                    </i></div>

                <div className="card" style={{ "width": "300px" }}>
                    <img className="card-img-top" src="https://www.android.com/static/2016/img/one/carousel/xiaomi_phones_a3-global_1x.png" alt="Card image" style={{ "width": "100%" }} />
                    <div className="card-body">
                        <h4 className="card-title">Infinix</h4>
                        <p className="card-text">Very reasonable price</p>
                        <button href="#" className="btn btn-primary" onClick={CartHandler}>Add to Cart</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home