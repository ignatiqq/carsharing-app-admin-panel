import { ITemporaryNotification } from "store/notifications/types";
import { v4 as uuidv4 } from "uuid";

export const successTemporaryChangeEssense: ITemporaryNotification = {
    id: uuidv4(),
    type: "success",
    value: "Успех! Машина сохранена"
}

export const failedTemporaryChangeEssense: ITemporaryNotification = {
    id: uuidv4(),
    type: "failed",
    value: "Ошибка! Машина не сохранена, попробуйте позже"
}