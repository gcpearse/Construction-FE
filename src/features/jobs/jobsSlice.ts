import { PayloadAction, createSlice } from "@reduxjs/toolkit";


type JobsState = {
  isJobAdderToggled: boolean
  selectedService: string | undefined
}


const initialState: JobsState= {
  isJobAdderToggled: false,
  selectedService: undefined
}


const jobsSlice = createSlice({

  name: "jobs",
  initialState,
  reducers: {

    openJobAdder: (state, action: PayloadAction<string | undefined>) => {
      state.isJobAdderToggled = true
      state.selectedService = action.payload
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
