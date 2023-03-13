import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    loading : false,
    products:[],
    error:''
}

export const fetchData = createAsyncThunk('product/fetchData',()=>{
    return axios.get('https://dummyjson.com/products')
    .then(res=>res.data)

})

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers:{

    },
    extraReducers: (biulder) => {
        biulder.addCase(fetchData.pending, (state) => {
          state.loading = true;
        });
        biulder.addCase(fetchData.fulfilled, (state, action) => {
          state.loading = false;
          state.products = action.payload;
          state.error = "";
        });
        biulder.addCase(fetchData.rejected, (state, action) => {
          state.loading = false;
          state.products = [];
          state.error = action.error.message;
        });
    }
})

export default productSlice.reducer;
