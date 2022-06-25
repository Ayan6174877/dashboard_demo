import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

// First, create the thunk for asynchronous data
// reducers are pure functions so we cannot make asynchronous calls
export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (dispatch, getState) => {
    // fetch will return us a promise with user data
    return await fetch('https://jsonplaceholder.typicode.com/users').then(
      (res) => res.json())
  }
)

const userSlice = createSlice({
    name: 'users',
    initialState: {
      users: [], // setting the initial state of users to empty array
      status: null
    },
    extraReducers: {
      // initial state when API call is been made
      [getUsers.pending]: (state, action) => {
          state.status = "loading"
      },
      // when the data is successfully received from the API
      [getUsers.fulfilled]: (state, action) => {
        state.status = "success";
        state.users = action.payload
      },
      // if the call gets rejected
      [getUsers.rejected]: (state, action) => {
        state.status = "failed";
      }
    }
})


export default userSlice.reducer;