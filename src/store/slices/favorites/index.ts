import { createAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { ProductInList } from "../../beekneesApi";
import { RootState } from "../../store";
interface FavoritesState {
    favorires: ProductInList[]
}

const initialState: FavoritesState = {
    favorires: []
};

export type ProductInFavorites = ProductInList & { id: NonNullable<ProductInList['id']> };


export const addFavorite = createAction<ProductInList>('addFavorite');
export const deleteFavorite = createAction<Pick<ProductInList, 'id'>>('deleteFavorite');




const favoritesEntitiyAdapter = createEntityAdapter({
    selectId: (e: ProductInFavorites) => e.id
})

const favoriteSlice = createSlice({
    name: 'favorites',
    initialState: favoritesEntitiyAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addFavorite, (state, action) => {
            const favoriteItem = action.payload;
            if (favoriteItem.id) favoritesEntitiyAdapter.addOne(state, favoriteItem as ProductInFavorites);
        }),
            builder.addCase(deleteFavorite, (state, action) => {
                favoritesEntitiyAdapter.removeOne(state, action.payload.id ?? '');
            })
    }

})

export const favoritesSelectors = favoritesEntitiyAdapter.getSelectors<RootState>(state => state.favoritesReducer);
export const favoritesReducer = favoriteSlice.reducer;
