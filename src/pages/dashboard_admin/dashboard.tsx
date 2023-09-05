import styles from "./dashboard2.module.scss";
import PieChartWithLabels from "./piechart";
import total_patient_icon from "./../../../public/total_patient_icon.png";
import super_admin_styles from "./../../component/sidebar/super_admin_styles.module.scss";
import search_icon from "./../../../public/search_icon.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";

function Super_Admin_Dashboard() {
  const navigate = useNavigate();

  // const handleSearchTextChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const searchText = event.target.value;
  // };

  return (
    <>
      <div className={super_admin_styles.main_header}>
        <div className={super_admin_styles.main_header_top}>
          <div className={super_admin_styles.main_header_top_search}>
            <img src={search_icon} alt="" className="" />
            <input
              type="text"
              className="input_search"
              placeholder="Search"
              // onChange={handleSearchTextChange}
            />
          </div>
          <div
            className={super_admin_styles.header_profile}
            onClick={() => navigate("/")}
          >
            <div className={super_admin_styles.header_profile_name}>
              Kanika
              <p style={{ color: "#1977F3" }}>Super Admin</p>
            </div>
            <AccountCircleIcon fontSize="large" />
          </div>
        </div>
        <div className={super_admin_styles.main_header_bottom}>
          <div className={super_admin_styles.welcome}>
            <h1 className={super_admin_styles.header_heading}>
              Welcome Kanika
            </h1>
            <p className="">Super Admin</p>
          </div>
        </div>
      </div>
      <div className={super_admin_styles.main_info_right}>
        <div className={styles.container}>
          <div className={styles.container_cards}>
            <div
              className={styles.container_cards_item + " " + styles.card_violet}
            >
              <img src={total_patient_icon} alt="" className="" />
              <h1 className="">12</h1>
              <p className="">Total Hospitals</p>
            </div>
            <div
              className={styles.container_cards_item + " " + styles.card_orange}
            >
              <img src={total_patient_icon} alt="" className="" />
              <h1 className="">15</h1>
              <p className="">Total patients</p>
            </div>
          </div>
          <div className={styles.container_piechart}>
            <div className={styles.container_piechart_header}>Cities</div>
            <PieChartWithLabels />
          </div>
          <div className={styles.container_title }>Recently Added Hospitals</div>
          <div
            className={styles.container_widz + " " + styles.container_widz_1}
          >
            <img src={total_patient_icon} alt="" className="" />
            <h2 className="">Apollo Hospital</h2>
            <p className="">Jubilee Hills, Hyderabad</p>
          </div>

          <div
            className={styles.container_widz + " " + styles.container_widz_2}
          >
            <img src={total_patient_icon} alt="" className="" />
            <h2 className="">Apollo Hospital</h2>
            <p className="">Jubilee Hills, Hyderabad</p>
          </div>
          <div
            className={styles.container_widz + " " + styles.container_widz_3}
          >
            <img src={total_patient_icon} alt="" className="" />
            <h2 className="">Apollo Hospital</h2>
            <p className="">Jubilee Hills, Hyderabad</p>
          </div>
          <div
            className={styles.container_widz + " " + styles.container_widz_4}
          >
            <img src={total_patient_icon} alt="" className="" />
            <h2 className="">Apollo Hospital</h2>
            <p className="">Jubilee Hills, Hyderabad</p>
          </div>
          <div
            className={styles.container_widz + " " + styles.container_widz_5}
          >
            <img src={total_patient_icon} alt="" className="" />
            <h2 className="">Apollo Hospital</h2>
            <p className="">Jubilee Hills, Hyderabad</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Super_Admin_Dashboard;
