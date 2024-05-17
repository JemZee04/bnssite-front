import { createAction, createEntityAdapter, createSelector, createSlice } from "@reduxjs/toolkit";
import { ProductInList } from "../../beekneesApi";
import { ProductInCart } from "./types";
import { RootState, useAppSelector } from "../../store";

export const addOneToCart = createAction<ProductInList>('addToCart');
export const deleteOneFromCart = createAction<Pick<ProductInList, 'id'>>('deleteFromCart');
export const addManyToCart = createAction<ProductInCart>('addManuToCart');
export const deleteAllFromCart = createAction('clearCart');

const cartEntityAdapter = createEntityAdapter({
    selectId: (product: ProductInCart) => product.id
})



const cartSlice = createSlice({
    name: 'cart',
    initialState: cartEntityAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addOneToCart, (state, action) => {
            const item = action.payload;
            if (!item.id) return state;
            const productInCart = cartEntityAdapter.getSelectors().selectById(state, item.id);
            if (productInCart) cartEntityAdapter.updateOne(state, { id: item.id, changes: { count: productInCart.count + 1 } });
            else cartEntityAdapter.addOne(state, { ...item, count: 1, id: item.id });
            // product
        }),
            builder.addCase(deleteAllFromCart, state => {
                cartEntityAdapter.removeAll(state);
            }),
            builder.addCase(deleteOneFromCart, (state, action) => {
                const item = action.payload;
                if (!item.id) return state;
                const productInCart = cartEntityAdapter.getSelectors().selectById(state, item.id);
                if (productInCart) cartEntityAdapter.updateOne(state, { id: item.id, changes: { count: productInCart.count - 1 } });
                else cartEntityAdapter.removeOne(state, action.payload.id ?? '');
            }),
            builder.addCase(addManyToCart, (state, action) => {
                const item = action.payload;
                if (!item.id) return state;
                const productInCart = cartEntityAdapter.getSelectors().selectById(state, item.id);
                if (productInCart) cartEntityAdapter.updateOne(state, { id: item.id, changes: { count: productInCart.count + item.count } });
                else cartEntityAdapter.addOne(state, item);
            })
    }

})


export const cartSelectors = cartEntityAdapter.getSelectors<RootState>(state => state.cartReducer);
export const selectTotalCount = createSelector(
    [(state: RootState) => cartSelectors.selectAll(state)],
    (items) => items.map(i => i.count).reduce((prev, curr) => prev + curr, 0)
)

export const isInCartSelector = createSelector(
    [
        (state: RootState, itemWithId: Pick<ProductInList, 'id'>) => cartSelectors.selectById(state, itemWithId.id ?? '')
    ],
    (item) => item != null
);

export const cartReducer = cartSlice.reducer;
