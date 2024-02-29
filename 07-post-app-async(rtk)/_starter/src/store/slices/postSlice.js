import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import apiUrl from '../../utils/apiURL';

const initialState = {
  posts: [],
  loading: false,
  error: '',
};

// fetchPosts => fetchPosts.pending ,fetchPosts.fullfilled, fetchPosts.rejected
// payload คือ 1st arg ตอน dispatch ใน React
export const fetchPosts = createAsyncThunk('post/fetchPosts', async (payload, thunkAPI) => {
  try {
    const response = await axios.get(apiUrl);
    return response.data; // จะไปเข้า builder ที่เป็น case fullfilled (action.payload == response.data)
    // {type: "post/fetchPosts/fulfilled" , payload: response.data}
  } catch (error) {
    console.log(error.response);
    // return thunkAPI.rejectWithValue('fetchError');
    // builder => {type: "post/fetchPosts/rejected", payload: "fetchError"}

    return thunkAPI.rejectWithValue(error.response.statusText);
    // builder => {type: "post/fetchPosts/rejected", payload: "Not Found"}
  }
});

// searchPost
export const searchPost = createAsyncThunk(
  'post/searchPost',
  async (payload, { rejectWithValue, fulfillWithValue }) => {
    const { postId } = payload;
    try {
      const { data } = await axios.get(`${apiUrl}/${postId}`);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.statusText);
    }
  }
);

const postSlice = createSlice({
  name: 'post', // ใช้เป็น prefix ของ action ต่างๆ
  initialState,
  reducers: {
    addPost: (state, action) => {}, // type : post/addPost
    removePost: (state, action) => {}, // type : post/removePost
    editPost: (state, action) => {}, // type : post/editPost
  }, // Sync Task
  extraReducers: (builder) => {
    // fetch Post
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.loading = true; // immer
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        //  action.payload : Array<Post>
        state.posts = action.payload; // Array<Post>
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // seachPost
    builder
      .addCase(searchPost.pending, (state, action) => {
        state.posts = [];
        state.loading = true;
      })
      .addCase(searchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        // action.payload : 1 Post
        state.posts = [action.payload];
      })
      .addCase(searchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }, // Async Task
});

// สร้่าง Reducer (กล่องเขียวเข้ม R ตาม docs)
const postReducer = postSlice.reducer;
export default postReducer;

// สร้าง Action Creator ให้ UI Dispatch : คือ FN ที่ return action object {type:string,payload:any}
const allActionCretors = postSlice.actions;
export const { addPost, removePost, editPost } = allActionCretors;
