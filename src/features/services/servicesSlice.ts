import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type ServicesState = {
  isFormToggled: boolean
  selectedService: string | undefined
}

const initialState: ServicesState = {
  isFormToggled: false,
  selectedService: undefined
}

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    openServiceForm: (state, action: PayloadAction<string>) => {
      state.isFormToggled = true
      state.selectedService = action.payload
    },
    closeServiceForm: (state) => {
      state.isFormToggled = false
      state.selectedService = undefined
    }
  }
})

export const {
  openServiceForm,
  closeServiceForm
} = servicesSlice.actions

export default servicesSlice.reducer
