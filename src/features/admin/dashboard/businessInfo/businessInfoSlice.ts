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
    openBusinessInfoForm: (state) => {
      state.isFormToggled = true
    },
    closeBusinessInfoForm: (state) => {
      state.isFormToggled = false
    }
  }
})

export const {
  openBusinessInfoForm,
  closeBusinessInfoForm
} = businessInfoSlice.actions

export default businessInfoSlice.reducer
