import { format } from "date-fns";
import { ru } from "date-fns/locale"

export const formatDate = (value: Date, dateFormat: string) => {
    return format(value, dateFormat, {locale: ru});
}