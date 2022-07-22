import React, { ReactNode} from 'react';

import { Portal } from "components";
import styles from "./ModalStandart.module.scss";
import classNames from 'classnames';

interface IModal {
    children: ReactNode,
    className?: string,
    isOpen: boolean,
    setOpen?: (data: boolean) => void
}

const ModalStandart: React.FC<IModal> = ({
    children,
    className,
    isOpen, 
    setOpen
}) => {

    if(!isOpen) {
        return null
    }

    return (
        <Portal>
            <div className={classNames(styles.modalOverlay, className)}>
                {children}
            </div>
        </Portal>
    )
}

export default ModalStandart;