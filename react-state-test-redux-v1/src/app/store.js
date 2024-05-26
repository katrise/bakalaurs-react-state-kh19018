import { configureStore } from '@reduxjs/toolkit';
//importē segmentu, lai savienotu metodes ar atslēgu
import listSlice from '../slice';

export default configureStore({
  reducer: {
    //atslēga tiek savienota ar 'listSlice' reducenta loģiku, jo eksportā
    //kā noklusējums tika padotas reducenta funkcijas
    list: listSlice,
  },
});
