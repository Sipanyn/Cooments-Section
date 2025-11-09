import styles from "./custom-text-area-component.module.css";
import { useSupa } from "../../supa-Store";
const CustomTextAreaComponent = ({ setCustomTextBoxValue }) => {
  const customTextBoxValue = useSupa((state) => state.customTextBoxValue);
  return (
    <textarea
      value={customTextBoxValue}
      onChange={(e) => setCustomTextBoxValue(e.target.value)}
      className={styles.textarea}
      placeholder="Add comment"
    ></textarea>
  );
};

export default CustomTextAreaComponent;
