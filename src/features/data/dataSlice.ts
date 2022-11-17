import {createSlice} from "@reduxjs/toolkit";

export interface DataState {
    loading: boolean
    data: any
}

const initialState: DataState = {
    loading: false,
    data: []
}

// createSlice creates a reducer and can mutate the state
const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: (build) => {
    
    }

})


