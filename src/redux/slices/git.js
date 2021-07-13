import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
    isLoading: false,
    error: false,
    gitData: [],
    pureData: [],
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
            state.gitData = action.payload.gitData;
            state.pureData = action.payload.pureData;
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
        const pureData = gitData.items
        dispatch(slice.actions.getGitDataSucces({pureData}));
      } catch (error) {
        dispatch(slice.actions.hasError(error));
      }
    };
  }