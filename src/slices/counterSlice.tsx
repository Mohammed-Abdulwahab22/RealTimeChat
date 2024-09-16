import { createSlice } from "@reduxjs/toolkit";
interface CounterState{
    counter: number
}

const initialState: CounterState = {
    counter: 0
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        reset: (state) => {
            state.counter = 0;
        }
    }
})


export const { increment } = counterSlice.actions;
export default counterSlice.reducer;
