import { createStore , createSlice } from "@reduxjs/toolkit"; 
import { itemType } from "../Types/Types";
const getItemsFromLS = localStorage.getItem('items');
const initialItems  = getItemsFromLS ? JSON.parse(getItemsFromLS) : [];
const initialState : {items : itemType[]} = {items : initialItems};
const MainSlice = createSlice({
    name : 'goods',
    initialState,
    reducers : {
        addItem (state , action) {
            const cartItem  = state.items.find((item) => item.itemName == action.payload.itemName );
            const cartItemIndex = cartItem ? state.items.indexOf(cartItem) : null;
            if(cartItem) {
                const updateItem = {...cartItem , quantity : cartItem.quantity + action.payload.quantity};
                if(cartItemIndex !== null) 
                state.items[cartItemIndex]=updateItem;
            }
            else {
                state.items.push(action.payload);
            }
        },
        removeItem (state , action) {
            const cartItem = state.items.find((item) => item.itemName == action.payload);
            const cartItemIndex = cartItem ? state.items.indexOf(cartItem) : null;
            if(cartItem) {
            if(cartItem.quantity > 1) {
                const updateItem = {...cartItem , quantity : cartItem.quantity -1};
                if(cartItemIndex !== null) 
                state.items[cartItemIndex] = updateItem;
            }
            else {
                state.items = state.items.filter((item) => item.itemName !==action.payload);
            }  

    } 
}
    }
});

export const goodsActions = MainSlice.actions;
export const store = createStore(MainSlice.reducer);