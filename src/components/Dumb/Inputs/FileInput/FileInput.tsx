import React, { DragEvent, useState } from 'react';
import classNames from 'classnames';

import { IInput } from "../type";
import { DragOver } from "components";
import styles from "./FileInput.module.scss";

interface IFileInput extends IInput {
  onDragEnter?: (e: DragEvent<HTMLInputElement>) => void,
  onDragOver?: (e: DragEvent<HTMLInputElement>) => void,
  onDrop?: (e: DragEvent<HTMLInputElement>) => void
}

const FileInput: React.FC<IFileInput> = ({
    placeholder = "Выберите файл...",
    className,
    name,
    onChange,
    onDragEnter,
    onDragOver,
    onDrop
}) => {
  const [isDragOver, setIsDragOver] = useState<boolean>(false);

  const dragOverHandler = () => {
    if(!isDragOver) {
      setIsDragOver(true);
    }
  }

  const dragLeaveHandler = () => {
    setIsDragOver(false);
  }

  const dragDropHandler = (e: DragEvent<HTMLInputElement>) => {
    if(onDrop) {
      onDrop(e);
    }
    setIsDragOver(false);
  }

  return (
    <div className={styles.wrapper}>
      <input 
          id="file-input"
          type="file"
          name={name}
          className={classNames(styles.input, className)}
          onChange={onChange}
          onDragEnter={onDragEnter}
          onDragLeave={dragLeaveHandler}
          onDragOver={onDragOver ? onDragOver : dragOverHandler}
          onDrop={dragDropHandler}
      />
      <div className={styles.CustomInputWrapper}>
        {
          isDragOver ?
          <DragOver />
          :
          <>
            <div className={styles.placeholder}>
              {placeholder}
            </div>
            <label htmlFor="file-input" className={styles.label}>
              Обзор
            </label>
          </>
        }
      </div>
      
    </div>
  )
}

export default FileInput