import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

// First, create the thunk for asynchronous data
// reducers are pure functions so we cannot make asynchronous calls
export const getPhotos = createAsyncThunk(
  "photos/getPhotos",
  async (dispatch, getState) => {
    // fetch will return us a promise with user data
    return await fetch('https://jsonplaceholder.typicode.com/photos').then(
      (res) => res.json())
  }
)

const photoSlice = createSlice({
    name: 'photos',
    initialState: {
      photos: [], // setting the initial state of users to empty array
      status: null
    },
    extraReducers: {
      // initial state when API call is been made
      [getPhotos.pending]: (state, action) => {
          state.status = "loading"
      },
      // when the data is successfully received from the API
      [getPhotos.fulfilled]: (state, action) => {
        state.status = "success";
        state.photos = action.payload
      },
      // if the call gets rejected
      [getPhotos.rejected]: (state, action) => {
        state.status = "failed";
      }
    }
})


export default photoSlice.reducer;