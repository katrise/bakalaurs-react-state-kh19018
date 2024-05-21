import { createSlice } from '@reduxjs/toolkit'

export const textSlice = createSlice({
  name: 'texts',
  initialState: {
    value: '',
  },
  reducers: {
    showText: (state) => {
      state.value = 'Iekšējā komponente sūta sveicienus!'
    },
  },
})

export const { showText } = textSlice.actions;

export default textSlice.reducer;