import Button from 'components/Dumb/Button/Button';

import styles from "./EssenseOptionsFooter.module.scss";

interface IEssenseOptinsFooter<T> {
    onApply?: (data: T) => void,
    onCancel?: (data: T) => void,
    onDelete?: (data: T) => void,
    applyText?: string
}

const EssenseOptionsFooter = <T,>({
    onApply,
    onCancel,
    onDelete,
    applyText
}: IEssenseOptinsFooter<T>) => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.wrapper__buttons}>
            <Button
                onClick={onApply}
                apperance="default"
            >
                {applyText ? applyText : "Сохранить"}
            </Button>
            <Button
                onClick={onCancel}
                apperance="common"
                className={styles.cancelBtn}
            >
                Отменить
            </Button>
        </div>
        <div>
            <Button
                onClick={onDelete}
                apperance="dangerous"
            >
                Удалить
            </Button>
        </div>
    </div>
  )
}

export default EssenseOptionsFooter;