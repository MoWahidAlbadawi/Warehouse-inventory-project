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
            const cartItem  = state.items.find((item) => item.itemName.trim() == action.payload.itemName.trim());
            const cartItemIndex = cartItem ? state.items.indexOf(cartItem) : null;
            if(cartItem) {
                const updateItem = {...cartItem , quantity : cartItem.quantity + action.payload.quantity};
                if(cartItemIndex !== null) 
                state.items[cartItemIndex]=updateItem;
            }
            else {
                state.items = state.items.concat(action.payload);
            }
        },
        removeItem (state , action) {
            const cartItem  = state.items.find((item) => item.itemName.trim() == action.payload.itemName.trim());
            const cartItemIndex = cartItem ? state.items.indexOf(cartItem) : null;
            if(cartItem) 
                if(cartItem.quantity > action.payload.quantity) {
                const updateItem = {...cartItem , quantity : cartItem.quantity - action.payload.quantity};
                if(cartItemIndex !== null) 
                state.items[cartItemIndex]=updateItem;
            }
            else {
                state.items = state.items.filter((item) => item.itemName !== action.payload.itemName);
            }
        },
    }
});

export const goodsActions = MainSlice.actions;
export const store = createStore(MainSlice.reducer);