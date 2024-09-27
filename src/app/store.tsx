import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "../slices/api/getUsers"; 
import usersReducer from "../slices/usersSlice"; 

const store = configureStore({
    reducer: {
        [usersApi.reducerPath]: usersApi.reducer, 
        users: usersReducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(usersApi.middleware), 
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
