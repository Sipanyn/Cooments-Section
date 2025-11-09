import styles from "./edit-component.module.css";

const EditComponent = () => {
  return (
    <div className={styles.editComponent}>
      <svg className={styles.edit_icon}>
        <use href={"/sprite.svg#edit_icon"} />
      </svg>
      <p>Edit</p>
    </div>
  );
};

export default EditComponent;
