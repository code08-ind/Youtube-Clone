import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name: 'search',
    initialState: {

    },
    reducers:{
        // actions
        cacheResults:(state, action)=>{
            // we are merging the state and payload together here.
            state = Object.assign(state, action.payload);
        }
    }
});

// Exporting slice actions
export const {cacheResults} = searchSlice.actions;

// Exporting Reducer
export default searchSlice.reducer;

