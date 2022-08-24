import Home from "../components/home"
import { connect } from 'react-redux'
import { addToCart } from "../Services/Actions/Actions"

const mapStateToProps = (state) => ({
            Data:state
})

const mapDispatchToProps = (dispatch) => ({
    addToCartHandler: (data) => dispatch(addToCart(data))

})

export default connect(mapStateToProps,mapDispatchToProps)(Home)


















