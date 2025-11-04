import styles from "./text-area-component.module.css";

const TextAreaComponent = () => {
  return (
    <textarea className={styles.textarea} placeholder="Add comment"></textarea>
  );
};

export default TextAreaComponent;
