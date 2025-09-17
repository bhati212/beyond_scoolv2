import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import type { Content } from '../../../src/types/content';
import type { RootState } from '../../../src/app/store';
import contentService from '../../../src/services/contentService';

const contentAdapter = createEntityAdapter<Content>();

const initialState = {
  myContent: contentAdapter.getInitialState(),
  orgContent: contentAdapter.getInitialState(),
  status: 'idle' as 'idle' | 'loading' | 'succeeded' | 'failed',
};

export const fetchMyContent = createAsyncThunk('content/fetchMy', async () => {
    return await contentService.getMyContent();
});

export const fetchOrgContent = createAsyncThunk('content/fetchOrg', async () => {
    return await contentService.getOrgContent();
});

const contentLibrarySlice = createSlice({
  name: 'contentLibrary',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
     .addCase(fetchMyContent.pending, (state) => { state.status = 'loading'; })
     .addCase(fetchMyContent.fulfilled, (state, action) => {
        contentAdapter.setAll(state.myContent, action.payload);
        state.status = 'succeeded';
      })
     .addCase(fetchOrgContent.pending, (state) => { state.status = 'loading'; })
     .addCase(fetchOrgContent.fulfilled, (state, action) => {
        contentAdapter.setAll(state.orgContent, action.payload);
        state.status = 'succeeded';
      })
     .addMatcher(
        (action) => action.type.endsWith('/rejected'),
        (state) => { state.status = 'failed'; }
      );
  },
});

export const { selectAll: selectMyContent } = contentAdapter.getSelectors((state: RootState) => state.contentLibrary.myContent);
export const { selectAll: selectOrgContent } = contentAdapter.getSelectors((state: RootState) => state.contentLibrary.orgContent);
export const selectContentLibraryStatus = (state: RootState) => state.contentLibrary.status;

export default contentLibrarySlice.reducer;