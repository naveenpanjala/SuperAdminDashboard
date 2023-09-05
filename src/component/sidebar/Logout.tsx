// import { useState } from "react";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


type Logoutpros = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Logout({ open, setOpen }: Logoutpros) {
  // const [open, setOpen] = useState(false);
  const [, removeCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    removeCookie("user", {});
    handleClose();
    navigate("/login");
  };

  return (
    <>
      <DialogTitle>{"Logout"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          Are you sure, you want to logout?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>No</Button>
        <Button variant="contained" onClick={handleLogout}>
          Yes
        </Button>
      </DialogActions>
    </>
  );
}

export default Logout;
