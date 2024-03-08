import { createSlice } from "@reduxjs/toolkit";


type JobsState = {
  isJobAdderToggled: boolean
  isJobUpdaterToggled: boolean
  isJobDeleterToggled: boolean
}


const initialState: JobsState = {
  isJobAdderToggled: false,
  isJobUpdaterToggled: false,
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

    openJobUpdater: (state) => {
      state.isJobUpdaterToggled = true
    },

    closeJobUpdater: (state) => {
      state.isJobUpdaterToggled = false
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
  openJobUpdater,
  closeJobUpdater,
  openJobDeleter,
  closeJobDeleter
} = jobsSlice.actions

export default jobsSlice.reducer
