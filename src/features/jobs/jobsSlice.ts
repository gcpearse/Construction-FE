import { createSlice } from "@reduxjs/toolkit";


type JobsState = {
  isJobAdderToggled: boolean
  isJobUpdaterToggled: boolean
  isJobDeleterToggled: boolean
  isJobImageAdderToggled: boolean
  isJobImageDeleterToggled: boolean
}


const initialState: JobsState = {
  isJobAdderToggled: false,
  isJobUpdaterToggled: false,
  isJobDeleterToggled: false,
  isJobImageAdderToggled: false,
  isJobImageDeleterToggled: false
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
    },

    openJobImageAdder: (state) => {
      state.isJobImageAdderToggled = true
    },

    closeJobImageAdder: (state) => {
      state.isJobImageAdderToggled = false
    },

    openJobImageDeleter: (state) => {
      state.isJobImageDeleterToggled = true
    },

    closeJobImageDeleter: (state) => {
      state.isJobImageDeleterToggled = false
    }

  }
})


export const {
  openJobAdder,
  closeJobAdder,
  openJobUpdater,
  closeJobUpdater,
  openJobDeleter,
  closeJobDeleter,
  openJobImageAdder,
  closeJobImageAdder,
  openJobImageDeleter,
  closeJobImageDeleter
} = jobsSlice.actions

export default jobsSlice.reducer
