import { createAction } from "@reduxjs/toolkit";
import { INotificationId, ITemporaryNotification } from "./types";

import { 
    ADD_TEMPORARY_NOTIFICATION,
    REMOVE_TEMPORARY_NOTIFICATION
} from "./constants";

export const addTemporaryNotification = createAction<ITemporaryNotification>(ADD_TEMPORARY_NOTIFICATION);
export const removeTemporaryNotification = createAction<INotificationId>(REMOVE_TEMPORARY_NOTIFICATION);