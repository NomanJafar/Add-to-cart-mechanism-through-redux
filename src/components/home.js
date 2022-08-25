import React from 'react'

const Home = (props) => {
    console.log("home props", props.Data.cartItems.length);
    const AddCartHandler = () => {
        props.addToCartHandler({ price: "5000", productname: "phone" });
    }
   const RemoveCartHandler =()=>{
    props.removeToCartHandler();    
   }
    return (
        <>
    

            <div>

                <div className="card" style={{ "width": "300px" }}>
                    <img className="card-img-top" src="https://www.android.com/static/2016/img/one/carousel/xiaomi_phones_a3-global_1x.png" alt="Card image" style={{ "width": "100%" }} />
                    <div className="card-body">
                        <h4 className="card-title">Infinix</h4>
                        <p className="card-text">Very reasonable price</p>
                        <button href="#" className="btn btn-primary" onClick={AddCartHandler}>Add to Cart</button>
                        <button href="#" className="btn btn-primary mx-1" onClick={RemoveCartHandler}>Remove to Cart</button>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home