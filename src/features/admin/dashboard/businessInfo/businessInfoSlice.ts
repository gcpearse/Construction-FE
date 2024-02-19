import { createSlice } from "@reduxjs/toolkit"

type businessInfoState = {
  isFormToggled: boolean
}

const initialState: businessInfoState = {
  isFormToggled: false
}

const businessInfoSlice = createSlice({
  name: "businessInfo",
  initialState,
  reducers: {
    openForm: (state) => {
      state.isFormToggled = true
    },
    closeForm: (state) => {
      state.isFormToggled = false
    }
  }
})

export const {
  openForm,
  closeForm
} = businessInfoSlice.actions

export default businessInfoSlice.reducer
