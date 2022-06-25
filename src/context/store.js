import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import userReducer from '../context/userSlice';
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import photoReducer from "./photoSlice";

// configuring the Persitant storage for storing user login status in local stoarge
const persistConfig = {
    key: 'persist-userLogIn',
    storage
}

const PersistedReducer = persistReducer(persistConfig, authSlice.reducer)
const store = configureStore({
    reducer: {
        auth: PersistedReducer,
       // auth: authSlice.reducer,
        users: userReducer,
        photos: photoReducer
    },
})

export const persistor = persistStore(store);
export default store;