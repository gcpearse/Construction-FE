import { createSlice } from "@reduxjs/toolkit"


type BusinessInfoState = {
  isFormToggled: boolean
}


const initialState: BusinessInfoState = {
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
