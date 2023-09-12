import { useParams, useNavigate, Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import IconButton from "@mui/material/IconButton";
import styles from "./HospitalDetails.module.scss";
import { useEffect } from "react";
import BasicTabs from "./Tab";

interface HospitalDetailsProps {}

function HospitalDetails(props: any) {
  const navigate = useNavigate();
  const { hospitalName } = useParams<{ hospitalName: string }>();

  const hospitalData = {
    hospitalName: "Apollo Hospital",
    city: "Hyderabad",
  };

  useEffect(() => {
    // You can fetch additional data or perform any necessary actions here
  }, [hospitalName]);
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <h3>
          <IconButton
            aria-label="delete"
            onClick={() => navigate("../viewHospitals")}
          >
            <ArrowBackIosIcon />
          </IconButton>
        </h3>
      </div>
      <div className={styles.profile_container}>
        <div className={styles.profile_info}>
          <div className={styles.profile_info_left}>
            <h3>{hospitalData.hospitalName}</h3>
          </div>
        </div>
      </div>
      <div className={styles.profile_tabs}>
        <BasicTabs />
      </div>
    </div>
  );
}

export default HospitalDetails;
