import {createSlice} from '@reduxjs/toolkit';
import { LIVE_CHAT_COUNT } from './constants';

const chatSlice = createSlice({
    name: 'chat',
    initialState:{
        messages: [],
    },
    reducers:{
        addMessage: (state, action) => {
            // Will take 10 messages and will remove one from the last when a new message comes into the array and when the count becomes to this value and it will remove the last one.
            state.messages.splice(LIVE_CHAT_COUNT, 1);
            state.messages.push(action.payload);
        },
    }
});

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;