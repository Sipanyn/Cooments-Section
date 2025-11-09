import Swal from "sweetalert2";
import styles from "./delete-component.module.css";
import { useDeleteCm } from "../../utils/useDeleteCm";
import { useDeleteRp } from "../../utils/useDeleteRp";
const DeleteComponent = ({ rply, item }) => {
  const { mutate: deleteComment } = useDeleteCm();
  const { mutate: deleteRp } = useDeleteRp();
  return (
    <div
      onClick={() => {
        Swal.fire({
          title: "Delete commnet",
          text: "Are you sure,you want to delete this comment?this will remove the comment and can't be undone!",
          animation: true,
          showDenyButton: true,
          denyButtonText: "NO,CANCEL",
          denyButtonColor: "#515959",
          confirmButtonText: "YES,DELETE",
          confirmButtonColor: "#E3301C",
          focusConfirm: false,
          customClass: {
            title: "swal-title",
            popup: "my-custom-popup",
          },
        }).then(async (result) => {
          if (result.isConfirmed) {
            if (item) {
              deleteComment(item);
            } else {
              deleteRp(rply);
            }
          }
        });
      }}
      className={styles.deleteComponent}
    >
      <svg className={styles.delete_icon}>
        <use href={"/sprite.svg#delete_icon"} />
      </svg>
      <p>Delete</p>
    </div>
  );
};

export default DeleteComponent;
