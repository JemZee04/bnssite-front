import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { beekneesApi } from "./beekneesApi";
import { PersistConfig } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import { favoritesReducer } from "./slices/favorites";
import persistStore from "redux-persist/es/persistStore";
import { cartReducer } from "./slices/cart";

const persistConfig: PersistConfig<RootState> = {
    key: 'root',
    storage: storage,
    blacklist: ['api']
}

const rootReducer = combineReducers({
    favoritesReducer,
    cartReducer,
    [beekneesApi.reducerPath]: beekneesApi.reducer
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);


const setupStore = () => {
    return configureStore({
        reducer: persistedRootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
            .concat(beekneesApi.middleware)
    });
}



export const store = setupStore();
export const persistor = persistStore(store);
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']