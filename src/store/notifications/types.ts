interface INotification {
    id: string,
    type: "success" | "failed" | "warning",
    value: string,
}

export interface ITemporaryNotification extends INotification {}

export interface INotifications {
    temporary: {
        data: Array<ITemporaryNotification>
    }
}

export interface INotificationId {
    id: string
}