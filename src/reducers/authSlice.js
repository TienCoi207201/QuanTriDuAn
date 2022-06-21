import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null,
}

const authSlice = createSlice({
    name: 'authSlice',
    initialState: initialState,
    reducers:{
        addUser: (state, action) => {
            console.log('authSlice',action.payload); 
            state.user = action.payload;
        },
        clearUser: (state, action) => {
            state.user = null;
        }
    }
})

export const {addUser} = authSlice.actions;
export default authSlice.reducer;