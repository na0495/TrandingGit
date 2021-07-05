import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    isLoading: false,
    error: false,
    stats: [],
    errorMessage: '',
};

const slice = createSlice({
    name: 'git',
    initialState,
    reducers: {
        startLoading(state) {
            state.isLoading = true;
          },
        hasError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
          },
        getStatsSucces(state, action) {
            state.isLoading = false;
            state.stats = action.payload;
        }
    }
})

export default slice.reducer;

export function getStats() {
    return async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        const response = await axios.get('https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc');
        dispatch(slice.actions.getStatsSucces(response.data.stats));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }