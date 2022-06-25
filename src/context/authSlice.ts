import {createSlice} from "@reduxjs/toolkit";

interface LoginState {
    isLoggedIn : boolean
}

const initialState: LoginState = {
    isLoggedIn: false
 }

const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    }
})

export const authActions = authSlice.actions;
export default authSlice;