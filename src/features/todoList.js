import { createSlice } from "@reduxjs/toolkit";
const todoListSlice = createSlice({
    name:"todoList",
    initialState:{value:[{id: "D7eCtcoCFm68JaGRaBfW-", description: "Project 4", done: true}]},
    reducers:{
        addItem:(state,action)=>{
            console.log(state.value, action.payload)
            state.value.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.value = state.value.filter((el) => el.id !== action.payload.id);
        },
        cancelItem:(state,action)=>{
            state.value = state.value.map((el) => {
                if (el.id === action.payload.id) {
                  el.done = !el.done
                }
                return el;
              })
            console.log("Finish the task", state.value)
        },
    }
})
export const {addItem,removeItem,cancelItem} = todoListSlice.actions
export default todoListSlice.reducer