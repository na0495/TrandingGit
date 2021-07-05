import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    isLoading: false,
    error: false,
    gitData: [],
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
        getGitDataSucces(state, action) {
            state.isLoading = false;
            state.gitData = action.payload;
        }
    }
})

export default slice.reducer;

export function getGitData() {
    return async (dispatch) => {
      dispatch(slice.actions.startLoading());
      try {
        const response = await axios.get('https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc');
        const gitData = response.data;
        dispatch(slice.actions.getGitDataSucces({gitData}));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }