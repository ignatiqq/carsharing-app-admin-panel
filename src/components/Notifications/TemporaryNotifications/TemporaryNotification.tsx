import React from 'react';

import { ReactComponent as XIcon } from "assets/icons/XIcon.svg"
import type { INotificationId, ITemporaryNotification } from "store/notifications/types";
import Button from 'components/Dumb/Button/Button';
import styles from "./TemporaryNotification.module.scss";
import classNames from 'classnames';

interface ITemporaryNotificationComponent extends ITemporaryNotification {
    onClick: (id: INotificationId) => void
}

const TemporaryNotification: React.FC<ITemporaryNotificationComponent> = ({
    value,
    id,
    type,
    onClick
}) => {

    const clickHandler = (data: string) => {
        onClick({id: data});
    }

    return (
        <div className={classNames(styles.wrapper, {
            [styles.wrapper_success]: type === "success",
            [styles.wrapper_failed]: type === "failed",
        })}>
            <div className={styles.text}>
                {value}
            </div>
            <Button
                className={styles.button_delete}
                onClick={() => clickHandler(id)}
            >
                <XIcon width="20px" height="20px" stroke="white" />
            </Button>
        </div>
    )
}

export default TemporaryNotification;