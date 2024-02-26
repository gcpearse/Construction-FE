import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type ServicesState = {
  isImageUpdaterToggled: boolean
  isUpdaterToggled: boolean
  isDeleterToggled: boolean
  selectedService: string | undefined
}

const initialState: ServicesState = {
  isImageUpdaterToggled: false,
  isUpdaterToggled: false,
  isDeleterToggled: false,
  selectedService: undefined
}

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    openImageUpdater: (state, action: PayloadAction<string>) => {
      state.isImageUpdaterToggled = true
      state.selectedService = action.payload
    },
    closeImageUpdater: (state) => {
      state.isImageUpdaterToggled = false
      state.selectedService = undefined
    },
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
  openImageUpdater,
  closeImageUpdater,
  openServiceUpdater,
  closeServiceUpdater,
  openServiceDeleter,
  closeServiceDeleter
} = servicesSlice.actions

export default servicesSlice.reducer
