import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../api/axiosConfig";


const initialState = {
    articles: [],
    loading: false,
    error: null
}

export const fetchArticles = createAsyncThunk("articles/fetchArticles", async (a, {rejectWithValue}) => {
    try {
        const response = await client.get()
        return response.data.results;
    }
    catch(error){
        return rejectWithValue({error : error.message})
    }
    
})

const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: {

        [fetchArticles.pending] : (state, action) =>{
            state.loading = true;
        },

        [fetchArticles.fulfilled] : (state, action) =>{
            // console.log(action.payload);
            state.articles = action.payload;
            
            state.loading = false;
        },

        [fetchArticles.rejected] : (state, action) => {
            state.error = action.payload.error
            state.loading = false;
        }
    }
})

export default articleSlice.reducer;
