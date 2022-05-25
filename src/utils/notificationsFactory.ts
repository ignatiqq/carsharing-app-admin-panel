import { ITemporaryNotification } from "store/notifications/types";

export const temporaryNotificationsFactory = ({type, id, value}: ITemporaryNotification) => {
    return {
        type,
        id,
        value
    }
}