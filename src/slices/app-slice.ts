import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    value: {
      loading: {
        screen: false
      },
      title:"Home"
    }
  },
  reducers: {
    loading: (state, action) => {
      state.value.loading.screen = action.payload
    },
    setTitle: (state, action) => {
      state.value.title = action.payload
    }
  }
})

export const appActions = appSlice.actions

export default appSlice.reducer