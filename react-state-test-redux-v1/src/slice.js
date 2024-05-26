//rīkkopas metodes imports priekš segmenta izveides
import { createSlice } from '@reduxjs/toolkit';

export const listSlice = createSlice({
  //noklusējuma vērtību iestatīšana
  name: 'list',
  initialState: {
    //izveidojam 2500 garu masīvu ar aizpildītām vērtībām
    items: Array.from({ length: 2500 }, (_, index) => `Item ${index + 1}`),
  },
  //reducentu funkciju definēšana
  reducers: {
    //viena ieraksta pievienošana izmantojam push, lai pievienotu masīva galā jauno vērtību
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    //tāpat kā iepriekš pievienojam vērtības galā individuāli ar (...) palīdzību
    addMultipleItems: (state, action) => {
      state.items.push(...action.payload);
    },
  },
});
//eksportējam reducenta funkcijas kā darbības, lai tās varētu pielietot ārpus segmenta
export const { addItem, addMultipleItems } = listSlice.actions;
//eksportējam reducenta metodes, lai varētu veikt darbības ar stāvokļiem
export default listSlice.reducer;
