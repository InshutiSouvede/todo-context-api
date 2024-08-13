import { createSlice } from "@reduxjs/toolkit";
const todoListSlice = createSlice({
    name:"todoList",
    initialState:{value:[{id: "D7eCtcoCFm68JaGRaBfW-", description: "Project 4", done: true}]},
    reducers:{
        addItem:(state,action)=>{
            console.log(state.value, action.payload)
            state.value.push(action.payload)
        },
    }
})
export const {addItem} = todoListSlice.actions
export default todoListSlice.reducer