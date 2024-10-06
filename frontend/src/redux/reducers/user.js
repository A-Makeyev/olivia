import { createReducer } from "@reduxjs/toolkit"


const initialState = {
    isAuthenticated: false,
    user: null,
    loading: false,
    error: null,
}

export const userReducer = createReducer(initialState, (builder) => {
builder
    .addCase('AuthenticateUserRequest', (state) => {
    state.loading = true
    })
    .addCase('AuthenticateUserSuccess', (state, action) => {
    state.isAuthenticated = true
    state.user = action.payload
    state.loading = false
    })
    .addCase('AuthenticateUserFailure', (state, action) => {
    state.isAuthenticated = false
    state.error = action.payload
    state.loading = false
    })
    .addCase('ClearErrors', (state) => {
    state.error = null
    })
})