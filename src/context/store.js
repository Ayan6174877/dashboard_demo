import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userReducer from '../context/userSlice';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import photoReducer from "./photoSlice";

// configuring the Persitant storage for storing user login status in local stoarge
const persistConfig = {
    key: 'Persist-userLogin',
    storage,
}

const PersistedReducer = persistReducer(persistConfig, authSlice.reducer)
const store = configureStore({
    reducer: {
        auth: PersistedReducer,
        users: userReducer,
        photos: photoReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store);
export default store;