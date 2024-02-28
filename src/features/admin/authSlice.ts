import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { LoginResponse, User } from "../../models"


type AuthState = {
  user: User | null
  token: string | null
}


const initialState: AuthState = {
  user: null,
  token: null
}


const authSlice = createSlice({

  name: "auth",
  initialState,
  reducers: {

    setCredentials: (state, action: PayloadAction<LoginResponse>) => {
      const { name, role, token } = action.payload
      state.user = { name, role }
      state.token = token
    },

    logout: (state) => {
      state.user = null
      state.token = null
    }

  }
})


export const {
  setCredentials,
  logout
} = authSlice.actions

export default authSlice.reducer
