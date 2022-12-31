//For Additem to cart
export const addCart=(product)=>{
    return {
        type: "ADDITEM",
        payload: product
    }
}

//For Deleteitem from cart
export const delCart=(product)=>{
    return {
        type: "DELITEM",
        payload: product
    }
}
