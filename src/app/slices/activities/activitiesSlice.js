import { createSlice } from '@reduxjs/toolkit';

const activitySlice = createSlice({
    name: 'Activities',
    initialState: [{
        id: 1,
        name: 'Tarea 1',
        content: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        deletedAt: null,
    },
    {
        id: 2,
        name: 'Tarea 2',
        content: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb',
        deletedAt: null,
    },
    {
        id: 3,
        name: 'Tarea 3',
        content: 'ccccccccccccccccccccccccccccccccccccccccccccccccc',
        deletedAt: null,
    },
    {
        id: 4,
        name: 'Tarea 4',
        content: 'ddddddddddddddddddddddddddddddddddddddddddddddddd',
        deletedAt: null,
    },
    {
        id: 5,
        name: 'Tarea 5',
        content: 'eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        deletedAt: null,
    },
    ],
    reducers: {
        addActivity: (state, action) => {
            state.push(action.payload);
        },
        editActivity: (state, action) => {
            const { id, name, content } = action.payload;
            const foundAct = state.find((activity) => activity.id == id);
            if (foundAct) {
                foundAct.name = name;
                foundAct.content = content;
            }
        },
        softDeleteActivity: (state, action) => {
            console.log(action.payload);
            const foundAct = state.find((activity) => activity.id === action.payload);
            console.log(Date().toLocaleString())
            if (foundAct) {
                foundAct.deletedAt = Date().toLocaleString();
            }
        }
    }
})
export const { addActivity, editActivity, softDeleteActivity } = activitySlice.actions
export default activitySlice.reducer 
