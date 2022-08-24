import { ADD_TO_CART } from "../Constants";
// const initialState={
//     cartData: []
// }
export default function cartItems(state=[], action){
    
    switch (action.type) {
        case ADD_TO_CART :
            console.log(action)
            return[
                ...state,
                {cartData:action.data}
            ]
            break;
    
        default:
            return state
            break;
    }
}