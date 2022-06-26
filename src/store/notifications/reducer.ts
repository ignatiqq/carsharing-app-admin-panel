import { createReducer, PayloadAction } from "@reduxjs/toolkit";

import { INotificationId, INotifications, ITemporaryNotification } from "./types";
import { 
    addTemporaryNotification,
    removeTemporaryNotification
} from "./actions";

const initialState: INotifications = {
    temporary: {
        data: []
    }
}

const notifications = createReducer(initialState, (builder) => {
    builder
        .addCase(addTemporaryNotification, (state, action: PayloadAction<ITemporaryNotification>) => {
            state.temporary.data = [...state.temporary.data, action.payload]
        })
        .addCase(removeTemporaryNotification, (state, action: PayloadAction<INotificationId>) => {
            const filteredNotifications = state.temporary.data.filter(item => item.id !== action.payload.id);
            state.temporary.data = [...filteredNotifications];
        })
})

export default notifications;