import { useSupa } from "../../supa-Store";
import styles from "./text-area-component.module.css";

const TextAreaComponent = ({ setTextBoxValue }) => {
  const textBoxValue = useSupa((state) => state.textBoxValue);

  return (
    <textarea
      value={textBoxValue}
      onChange={(e) => setTextBoxValue(e.target.value)}
      className={styles.textarea}
      placeholder="Add comment"
    ></textarea>
  );
};

export default TextAreaComponent;
