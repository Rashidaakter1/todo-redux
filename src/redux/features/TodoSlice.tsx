import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
export type TTodo = {
    id: string;
    task: string;
    priority: "high" | "medium" | "low";
    description: string;
    isCompleted?: boolean;
}


type TInitialState = {
    tasks: TTodo[];
}
const initialState: TInitialState = {
    tasks: [],
}
export const ToDoSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<TTodo>) => {
            state.tasks.push({ ...action.payload, isCompleted: false })
        },
        removeTask: (state, action: PayloadAction<string>) => {
            state.tasks = state.tasks.filter(item => item.id !== action.payload)
        },
        toggleTask: (state, action: PayloadAction<string>) => {
            const task = state.tasks.find(item => item.id === action.payload)
            task!.isCompleted = !task?.isCompleted
            state.tasks.sort(function (x, y) {
                return (x === y) ? 0 : x ? -1 : 1;
            });
        },
        filterTask: (state, action) => {
            state.tasks = state.tasks.filter(item => item.priority === action.payload)
        }
    },
})


export const { addTask, removeTask, toggleTask, filterTask } = ToDoSlice.actions

export default ToDoSlice.reducer