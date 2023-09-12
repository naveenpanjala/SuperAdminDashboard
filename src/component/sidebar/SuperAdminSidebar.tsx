import React, { useEffect } from "react";
import styles from "./sidebar.module.scss";
import super_admin_styles from "./super_admin_styles.module.scss";
import { Outlet } from "react-router-dom";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import yantramLogo from "./../../../public/yantram_logo.png";
import addpatient_light from "./../../../public/addpatient_light.png";
import add_patient from "./../../../public/add_patient.png";
import dashboard_icon from "./../../../public/dashboard_icon.png";
import dashboard_dark_icon from "./../../../public/dashboard_dark_icon.png";
import logout from "./../../../public/logout.png";
import love from "./../../../public/love.png";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import Logout from "./Logout";
import { makeStyles } from "@mui/styles";
// import { useSeachStore } from "../../store/zustandstore";
const useStyles = makeStyles({
  dialogPaper: {
    // width: "600px",
    minWidth: "600px",
  },
});
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
// import { ChangeEventHandler, MouseEventHandler } from "react";
type buttonPro = {
  linkName: string;
  name: string;
  iconLight?: string;
  iconDark: string;
  exact?: boolean;
};
function Buttons({
  linkName,
  name,
  iconLight,
  iconDark,
  exact = false,
}: buttonPro): JSX.Element {
  const [isActive, setisActive] = React.useState(false);
  const location = useLocation();
  // const { setSearchText } = useSeachStore();
  useEffect(() => {
    if (exact) {
      if (location.pathname == linkName) {
        setisActive(true);
      } else setisActive(false);
    } else {
      if (location.pathname.includes(linkName)) {
        setisActive(true);
      } else {
        setisActive(false);
      }
    }
  }, [location]);
  return (
    <NavLink
      to={linkName}
      className={
        isActive
          ? styles.sidebar_button + " " + styles.active
          : styles.sidebar_button
      }
      // onClick={() => setSearchText("")}
    >
      <div className={styles.sidebar_button_icon}>
        {!isActive ? (
          <img src={iconDark} alt="" className="dark" />
        ) : (
          <img src={iconLight} alt="" className="light" />
        )}
      </div>
      {name}
    </NavLink>
  );
}

function SuperAdminSidebar(): JSX.Element {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  //   setLink(window.location.pathname);
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebar_container}>
          <div className={styles.sidebar_container_box}>
            <div
              className={styles.logo}
              onClick={() => navigate("/")}
            >
              <img src={yantramLogo} alt="" className="" />
            </div>
            <Buttons
              linkName={"/"}
              name={"Dashboard"}
              iconDark={dashboard_dark_icon}
              iconLight={ dashboard_icon}
              exact={true}
            />
            <Buttons
              linkName={"addHospital"}
              name={"Add Hospital"}
              iconDark={add_patient}
              iconLight={ addpatient_light}
            />
            <Buttons
              linkName={"viewHospitals"}
              name={"View Hospitals"}
              iconDark={add_patient}
              iconLight={addpatient_light}
            />
             <Buttons
              linkName={"Tickets"}
              name={"Tickets"}
              iconDark={add_patient}
              iconLight={addpatient_light}
            />
            <div className={styles.line}></div>
            <div style={{ marginTop: "1rem" }}></div>
            <div
              className={styles.sidebar_button}
              onClick={() => setOpen(true)}
            >
              <div className={styles.sidebar_button_icon}>
                <img src={logout} alt="" className="dark" />
              </div>
              Logout
            </div>
            <div className={styles.love}>
              <img src={love} alt="" className="" />
            </div>
          </div>
        </div>

        {/* The Right side of the containet */}

        <div className={super_admin_styles.main}>
          <Outlet />
        </div>
      </div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        classes={{ paper: classes.dialogPaper }}
      >
        <Logout setOpen={setOpen} open={open} />
      </Dialog>
    </>
  );
}

export default SuperAdminSidebar;










