export const successTemporaryChangeEssense = (id: string) => ({
    id: id,
    type: "success",
    value: `Успех! сущность сохранена`
})

export const failedTemporaryChangeEssense = (id: string) => ({
    id: id,
    type: "failed",
    value: `Ошибка! сущность не сохранена, попробуйте позже`
})

export const successTemporaryDeleteEssense = (id: string) => ({
    id: id,
    type: "success",
    value: `Успех! Сущность успешно удалена`
})

export const failedTemporaryDeleteEssense = (id: string) => ({
    id: id,
    type: "failed",
    value: `Ошибка! Сущность не удалилась, попробуйте позже`
})