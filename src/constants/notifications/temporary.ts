export const successTemporaryChangeEssense = (id: string) => ({
    id: id,
    type: "success",
    value: "Успех! Машина сохранена"
})

export const failedTemporaryChangeEssense = (id: string) => ({
    id: id,
    type: "failed",
    value: "Ошибка! Машина не сохранена, попробуйте позже"
})

export const successTemporaryDeleteEssense = (id: string) => ({
    id: id,
    type: "success",
    value: "Успех! Машина успешно удалена"
})

export const failedTemporaryDeleteEssense = (id: string) => ({
    id: id,
    type: "failed",
    value: "Ошибка! Машина не удалилась, попробуйте позже"
})