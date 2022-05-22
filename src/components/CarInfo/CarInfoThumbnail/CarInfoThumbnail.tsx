import React, { ChangeEvent, useState, DragEvent } from 'react';

import CarPlaceholder from "assets/images/CarPlaceholder.png";
import styles from "./CarInfoThumbnail.module.scss";
import FileInput from 'components/Dumb/Inputs/FileInput/FileInput';
import classNames from 'classnames';

interface ICarInfoThumbnail {
    image: string,
    name: string,
    category: string,
    className?: string
}

const CarInfoThumbnail: React.FC<ICarInfoThumbnail> = ({
    image,
    name,
    category,
    className
}) => {
    const [fileInfo, setFileInfo] = useState<File | null>(null);
    const [imageToShow, setImageToShow] = useState<string | null>(null);

    const fileChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            setImageToShow(URL.createObjectURL(e.target.files[0]));
            setFileInfo(e.target.files[0]);
        }
    }

    return (
        <div className={classNames(className, styles.wrapper)}>
            <div className={styles.image_wrapper}>
                <img 
                    src={imageToShow ? imageToShow : image ? image : CarPlaceholder}
                    alt={name}
                    onError={({currentTarget}) => {
                        currentTarget.onerror = null;
                        currentTarget.src = CarPlaceholder;
                    }}
                />
            </div>
            <div>
                <div className={styles.name}>{name}</div>
                <div className={styles.category}>{category}</div>
            </div>
            <div>
                {
                    fileInfo ?
                    <div>
                        <div className={styles.fileInfo}>Имя файла: {fileInfo.name}</div>
                        <div className={styles.fileInfo}>Размер файла: {(fileInfo.size / (1024 ** 2)).toFixed(3) + "MB"}</div> 
                    </div>
                    :
                    <FileInput
                        name="car-change-upload"
                        className={styles.uploadBtn}
                        onChange={fileChangeHandler}
                    />
                }
            </div>
        </div>
    )
}

export default CarInfoThumbnail;