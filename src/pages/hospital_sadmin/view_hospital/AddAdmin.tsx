import styles from "./../add_hospital/AddHospitalDetails.module.scss";
import form_1_icon from "./../../../../public/form_1_icon.gif";
import dummy_icon from "./../../../../public/dummy_pic_icon.png";
import Form from "./../add_hospital/Form";
export const AddAdmin = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_formRight}>
        <img src={form_1_icon} alt="" />
      </div>
      <div className={styles.container_formCenter}>
        <Form />
      </div>
      <div className={styles.container_formLeft}>
        <div className={styles.image_container}>
          Upload image
          <input
            type="file"
            id="profile_pic"
            accept="image/*"
            className={styles.profile_pic}
          />
          <label htmlFor="profile_pic" className={styles.profile_pic_label}>
            <img src={dummy_icon} alt="Dummy Icon" />
            <p>Drag & Drop</p>
            <p>or Browse</p>
          </label>
        </div>
      </div>
    </div>
  )
}
