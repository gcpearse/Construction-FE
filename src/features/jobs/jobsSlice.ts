import { createSlice } from "@reduxjs/toolkit";


type JobsState = {
  isJobAdderToggled: boolean
  isJobDeleterToggled: boolean
}


const initialState: JobsState = {
  isJobAdderToggled: false,
  isJobDeleterToggled: false
}


const jobsSlice = createSlice({

  name: "jobs",
  initialState,
  reducers: {

    openJobAdder: (state) => {
      state.isJobAdderToggled = true
    },

    closeJobAdder: (state) => {
      state.isJobAdderToggled = false
    },

    openJobDeleter: (state) => {
      state.isJobDeleterToggled = true
    },

    closeJobDeleter: (state) => {
      state.isJobDeleterToggled = false
    }

  }
})


export const {
  openJobAdder,
  closeJobAdder,
  openJobDeleter,
  closeJobDeleter
} = jobsSlice.actions

export default jobsSlice.reducer
