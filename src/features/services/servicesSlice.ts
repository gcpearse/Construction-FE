import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type ServicesState = {
  isUpdaterToggled: boolean
  isDeleterToggled: boolean
  selectedService: string | undefined
}

const initialState: ServicesState = {
  isUpdaterToggled: false,
  isDeleterToggled: false,
  selectedService: undefined
}

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    openServiceUpdater: (state, action: PayloadAction<string>) => {
      state.isUpdaterToggled = true
      state.selectedService = action.payload
    },
    closeServiceUpdater: (state) => {
      state.isUpdaterToggled = false
      state.selectedService = undefined
    },
    openServiceDeleter: (state, action: PayloadAction<string>) => {
      state.isDeleterToggled = true
      state.selectedService = action.payload
    },
    closeServiceDeleter: (state) => {
      state.isDeleterToggled = false
      state.selectedService = undefined
    }
  }
})

export const {
  openServiceUpdater,
  closeServiceUpdater,
  openServiceDeleter,
  closeServiceDeleter
} = servicesSlice.actions

export default servicesSlice.reducer
