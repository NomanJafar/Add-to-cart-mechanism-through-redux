import Header from "../components/Header"
import { connect } from 'react-redux'
import { addToCart,removeToCart } from "../Services/Actions/Actions"

const mapStateToProps = (state) => ({
            Data:state
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps,mapDispatchToProps)(Header)


















