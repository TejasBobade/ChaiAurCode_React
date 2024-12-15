import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData : null
}

const authSlice = createSlice({
    name : "auth",
    initialState,
    reducers: { 
        // action -> we get a payload , state -> we update the value in state in track
        // we don't need to spread values in state redux-toolkit spread values on it's own
        // login , logout are the actions
        login: (state,action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state,action) => {
            state.status = false;
            state.userData = null;
        }
    }
})

// exported actions from reducers
export const { login, logout} = authSlice.actions;

export default authSlice.reducer;