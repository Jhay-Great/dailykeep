import { configureStore } from '@reduxjs/toolkit'
import messageReducer from '../features/message/messageSlice'


export default configureStore({
    reducer: {
        todoItem: messageReducer,
    }
})

// export default store