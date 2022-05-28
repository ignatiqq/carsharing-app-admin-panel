export const successChangeEssense = (id: string) => ({
    id: id,
    type: "success",
    value: `Успех! сущность сохранена`
})

export const failedChangeEssense = (id: string) => ({
    id: id,
    type: "failed",
    value: `Ошибка! сущность не сохранена, попробуйте позже`
})

export const successDeleteEssense = (id: string) => ({
    id: id,
    type: "success",
    value: `Успех! Сущность успешно удалена`
})

export const failedDeleteEssense = (id: string) => ({
    id: id,
    type: "failed",
    value: `Ошибка! Сущность не удалилась, попробуйте позже`
})

export const successCreateEssense = (id: string) => ({
    id: id,
    type: "success",
    value: `Успех! Сущность успешно создана`
})

export const failedCreateEssense = (id: string) => ({
    id: id,
    type: "failed",
    value: `Ошибка! Сущность не создалсь, попробуйте позже`
})