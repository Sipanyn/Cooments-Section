import SendButtonComponent from "../send-button-component/send-button-component";
import TextAreaComponent from "../text-area-component/text-area-component";
import styles from "./main-text-box.module.css";

const MainTextBox = () => {
  return (
    <div className={styles.MainTextBox}>
      <div className={styles.user_image_container}>
        <img
          src="/images/Portrait of a confident young smart looking man _ Premium AI-generated image.jpg"
          alt="user"
        />
      </div>
      <div className={styles.TextAreaComponent}>
        <TextAreaComponent />
      </div>
      <div className={styles.SendButtonComponent}>
        <SendButtonComponent />
      </div>
    </div>
  );
};

export default MainTextBox;
