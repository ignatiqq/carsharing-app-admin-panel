import dropFile from "assets/images/dropFile.png";
import styles from "./DragOver.module.scss";

const DragOver = () => {
  return (
    <div className={styles.dropFile}>
        <img className={styles.dropFile__image} src={dropFile} alt="drop file" />
        <div className={styles.dropFile__text}>Перетащите файл сюда</div>
    </div>
  )
}

export default DragOver;