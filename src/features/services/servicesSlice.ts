import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type ServicesState = {
  isServiceAdderToggled: boolean
  isImageUpdaterToggled: boolean
  isUpdaterToggled: boolean
  isDeleterToggled: boolean
  selectedService: string | undefined
}

const initialState: ServicesState = {
  isServiceAdderToggled: false,
  isImageUpdaterToggled: false,
  isUpdaterToggled: false,
  isDeleterToggled: false,
  selectedService: undefined
}

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    openServiceAdder: (state) => {
      state.isServiceAdderToggled = true
    },
    closeServiceAdder: (state) => {
      state.isServiceAdderToggled = false
    },
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
  openServiceAdder,
  closeServiceAdder,
  openImageUpdater,
  closeImageUpdater,
  openServiceUpdater,
  closeServiceUpdater,
  openServiceDeleter,
  closeServiceDeleter
} = servicesSlice.actions

export default servicesSlice.reducer
