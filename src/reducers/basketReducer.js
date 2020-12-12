import { ADD_PRODUCT_BASKET, GET_NUMBERS_BASKET } from "../actions/types";

const initialState = {
    basketNumbers: 0,
    cartCost: 0,
    products: {
        margerita: {
            id: 1,
            name:"Margerita",
            price: 12.00,
            numbers: 0,
            inCart: false
        },
        capriciosa: {
            id: 2,
            name:"Capriciosa",
            price: 15.00,
            numbers: 0,
            inCart: false
        },
        peperoni: {
            id: 3,
            name:"Peperoni",
            price: 17.00,
            numbers: 0,
            inCart: false
        }

    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case ADD_PRODUCT_BASKET: 
            let addQuantity = { ...state.products[action.payload]}
            
            addQuantity.numbers += 1;
            addQuantity.inCart = true;

            return {
                ...state,
                basketNumbers: state.basketNumbers + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: addQuantity
                }
            }
        case GET_NUMBERS_BASKET:
            return {
                ...state
            }

        default: 
            return state;
    }
}