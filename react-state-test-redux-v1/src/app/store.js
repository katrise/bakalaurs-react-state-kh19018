//rīka importācija noliktavas vieglākai pārvaldībai
import { configureStore } from '@reduxjs/toolkit'
//reducenta funkcijas importācija priekš sasaistes
import showText from '../slice'
//noliktavas izveide
export default configureStore({
    reducer: {
        //atslēgas 'texts' sasaiste ar reducenta funkciju
        texts: showText,
    },
})
