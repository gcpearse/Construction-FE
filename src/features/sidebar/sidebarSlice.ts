import { createSlice } from "@reduxjs/toolkit"


type SidebarState = {
  visibleSidebar: boolean
}


const initialState: SidebarState = {
  visibleSidebar: false
}


const sidebarSlice = createSlice({

  name: "sidebar",
  initialState,
  reducers: {

    toggleSidebar: (state) => {
      state.visibleSidebar = !state.visibleSidebar
    },

    closeSidebar: (state) => {
      state.visibleSidebar = false
    }

  }
})


export const {
  toggleSidebar,
  closeSidebar
} = sidebarSlice.actions

export default sidebarSlice.reducer
