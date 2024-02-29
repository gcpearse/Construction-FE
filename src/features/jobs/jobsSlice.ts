import { createSlice } from "@reduxjs/toolkit";


type JobsState = {
  isJobAdderToggled: boolean
}


const initialState: JobsState = {
  isJobAdderToggled: false
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
    }
  }
})


export const {
  openJobAdder,
  closeJobAdder
} = jobsSlice.actions

export default jobsSlice.reducer
