import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { DataInstance, simulateFetchApi } from "./dataAPI";

export interface DataState {
    loading: boolean
    data: any
}

const initialState: DataState = {
    loading: false,
    data: []
}

// data transfered from dataAPI.ts
// createAsyncThunk is a payload creater
export const fetchDataAsync = createAsyncThunk(
    'data/fetchData',
    // payload
    async (): Promise<Array<DataInstance>> => {
        const response = await simulateFetchApi()
        return response
    }
)
// createSlice creates a reducer and can mutate the state
export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    // different states of the async cycle
    extraReducers: (builder) => {
    builder
        // pending state
        .addCase(fetchDataAsync.pending, (state: DataState) => {
            state.loading = true
        })
        // fufilled state
        .addCase(fetchDataAsync.fulfilled, (state: DataState, action: PayloadAction<Array<DataInstance>>) => {
            state.loading = false
            state.data = action.payload
        })
        // if the function rejects
        .addCase(fetchDataAsync.rejected, (state: DataState) => {
            state.loading = false;
        })
        
    }
})

// integrate into store.ts
export default dataSlice.reducer

