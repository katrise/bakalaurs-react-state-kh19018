//rīka importācija segmenta vieglākai pārvaldībai
import { createSlice } from '@reduxjs/toolkit'
//segments tiek izveidots ar 'createSlice' funkcijas palīdzību
export const textSlice = createSlice({
  //tiek piešķirts segmenta nosaukums
  name: 'texts',
  initialState: {
    //noklusējuma vērtība
    value: '',
  },
  reducers: {
    //reducenta funkcionalitātes izveide, kura pieņem stāvokli kā vērtību
    showText: (state) => {
      //tiek iestatīta jauna stāvokļa vērtība
      state.value = 'Iekšējā komponente sūta sveicienus!'
    },
  },
})
//reducenta funkcionalitātes eksportācija
export const { showText } = textSlice.actions;

export default textSlice.reducer;
