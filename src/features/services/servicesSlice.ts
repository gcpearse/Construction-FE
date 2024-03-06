import { PayloadAction, createSlice } from "@reduxjs/toolkit"


type ServicesState = {
  isServiceAdderToggled: boolean
  isServiceImageUpdaterToggled: boolean
  isServiceUpdaterToggled: boolean
  isServiceDeleterToggled: boolean
  selectedService: string | undefined
}


const initialState: ServicesState = {
  isServiceAdderToggled: false,
  isServiceImageUpdaterToggled: false,
  isServiceUpdaterToggled: false,
  isServiceDeleterToggled: false,
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
      state.isServiceImageUpdaterToggled = true
      state.selectedService = action.payload
    },

    closeImageUpdater: (state) => {
      state.isServiceImageUpdaterToggled = false
      state.selectedService = undefined
    },

    openServiceUpdater: (state, action: PayloadAction<string>) => {
      state.isServiceUpdaterToggled = true
      state.selectedService = action.payload
    },

    closeServiceUpdater: (state) => {
      state.isServiceUpdaterToggled = false
      state.selectedService = undefined
    },

    openServiceDeleter: (state, action: PayloadAction<string>) => {
      state.isServiceDeleterToggled = true
      state.selectedService = action.payload
    },

    closeServiceDeleter: (state) => {
      state.isServiceDeleterToggled = false
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
