import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [], 
    },
    reducers: {
        addUsers: (state, action) => {
            state.users = action.payload; 
        },
        updateUsers: (state, action) => {
            state.users = action.payload;
        },
    },
});

export const { addUsers, updateUsers } = usersSlice.actions;
export default usersSlice.reducer;
