import React, { ChangeEvent, useState, DragEvent } from 'react';

import CarPlaceholder from "assets/images/CarPlaceholder.png";
import styles from "./CarInfoThumbnail.module.scss";
import FileInput from 'components/Dumb/Inputs/FileInput/FileInput';
import classNames from 'classnames';
import base64Helper from 'utils/base64';
import type { ICardDataThumbnail } from "store/filtersData/types";

interface ICarInfoThumbnail {
    image?: string,
    name?: string,
    category?: string,
    className?: string,
    changeImageHandler: (data: ICardDataThumbnail) => void
}

const accessMimeTypes = ["image/jpeg","image/png","image/gif"]

const CarInfoThumbnail: React.FC<ICarInfoThumbnail> = ({
    image,
    name,
    category,
    className,
    changeImageHandler
}) => {
    const [fileInfo, setFileInfo] = useState<File | null>(null);
    const [uploadFileError, setUploadFileError] = useState<string | null>(null);
    const [imageToShow, setImageToShow] = useState<string | null>(null);

    const fileChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            const file = e.target.files[0];
            setUploadFileError(null);

            if(accessMimeTypes.includes(file.type)) {
                setImageToShow(URL.createObjectURL(file));
                setFileInfo(file);
                const fileUrl = await base64Helper.fileToBase64(file) as string;
                changeImageHandler({
                    ...file,
                    path: fileUrl,
                    originalname: file.name,
                    size: file.size,
                    mimetype: file.type
                });
            } else {
                setUploadFileError("Недопустимый тип файла")
            }
                
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
                    fileInfo && !uploadFileError ?
                    <div>
                        <div className={styles.fileInfo}>Имя файла: {fileInfo.name}</div>
                        <div className={styles.fileInfo}>Размер файла: {(fileInfo.size / (1024 ** 2)).toFixed(3) + "MB"}</div> 
                    </div>
                    : uploadFileError &&
                    <div className='error-text'>{uploadFileError}</div>
                }
                <div className={styles.fileInput__wrapper}>
                    <FileInput
                            name="car-change-upload"
                            className={styles.uploadBtn}
                            onChange={fileChangeHandler}
                    />
                </div> 
            </div>
        </div>
    )
}

export default CarInfoThumbnail;