import {createAsyncThunk, createSlice, PayloadAction, createSelector, createEntityAdapter} from '@reduxjs/toolkit';
import {Params, FormattedJobResponse, fetchJobsApi} from 'api/jobs';
import {RootState} from 'app/store';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async (params: Params | undefined) => {
  const response = await fetchJobsApi(params);
  return response;
})

export const jobsAdapter = createEntityAdapter({
  sortComparer: (a: FormattedJobResponse, b: FormattedJobResponse) => b.createdAt.localeCompare(a.createdAt)
})
export interface Filter {
  title: string;
  location: string;
  fullTime: boolean;
};


const initialState = jobsAdapter.getInitialState({
  loading: 'idle',
  error: '',
  filters: {
    title: '',
    location: '',
    fullTime: false
},
})


const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobFilters(state, action: PayloadAction<Filter>){
      state.filters = action.payload;
    }
  },
  extraReducers: {
    [`${fetchJobs.pending}`]: (state, action: PayloadAction<FormattedJobResponse[]>) => {
      state.loading = 'pending';
      state.error = '';
    },
    [`${fetchJobs.fulfilled}`]: (state, action: PayloadAction<FormattedJobResponse[]>) => {
      state.loading = 'resolved';
      jobsAdapter.upsertMany(state, action.payload)
    },
    [`${fetchJobs.rejected}`]: (state, action: PayloadAction<string, string, unknown, Error>) => {
      state.loading = 'rejected';
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
      }
    }
  }
});


const {reducer, actions} = jobSlice;
export const {setJobFilters} = actions; 

export default reducer;

// selectors
export const {
  selectAll: selectAllJobs,
  selectIds: selectJobIds,
  selectById: selectJobById,
} = jobsAdapter.getSelectors((state: RootState) => state.jobs);

export const jobFilterSelector = (state:RootState): Filter => state.jobs.filters;
export const loadingSelector = (state: RootState) => state.jobs.loading;
export const errorSelector = (state: RootState) => state.jobs.error;

export const selectJobs = createSelector(
  [selectAllJobs, jobFilterSelector],
  (jobs, filterOptions) => jobs.filter(job => !filterOptions.location || job.location.toLowerCase().includes(filterOptions.location.toLowerCase()))
  .filter(job => !filterOptions.title || job.title.toLowerCase().includes(filterOptions.title.toLowerCase()))
  .filter(job => !filterOptions.fullTime || job.type.toLocaleLowerCase() === "full time")
  .map(job => job.id)
)