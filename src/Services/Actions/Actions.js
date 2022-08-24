import {ADD_TO_CART} from "../Constants"
export const addToCart =(data)=>{
    console.log(data)
    return{
        type:ADD_TO_CART,
        data : data
    }

}