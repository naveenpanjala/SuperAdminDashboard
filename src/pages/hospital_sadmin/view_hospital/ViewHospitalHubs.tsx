import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import device_icon from "./../../../../public/cardiology_icon.png";
interface Hospital {
  hospitalName: string;
}

interface Hub {
  HubId: number;
  HubName: string;
  Status: string;
}

interface Props {
  open: boolean;
  handleClose: () => void;
  hospital: Hospital;
}

function ViewHospitalHubs({ open, handleClose, hospital }: Props) {
  const hubs: Hub[] = [
    { HubId: 1, HubName: "Hub 1", Status: "Online" },
    { HubId: 2, HubName: "Hub 2", Status: "Online" },
    { HubId: 3, HubName: "Hub 3", Status: "Online" },
    { HubId: 4, HubName: "Hub 4", Status: "Online" },
    { HubId: 5, HubName: "Hub 5", Status: "Online" },
    { HubId: 6, HubName: "Hub 6", Status: "Online" },
  ];

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        sx: {
          backgroundColor: "#f5f6f7",
          borderRadius: "20px",
          maxWidth: "70vw",
        },
      }}
    >
      <div
        style={{
          display: "flex",
          marginLeft: "auto",
          gap: "10px",
          marginTop: "10px",
        }}
      >
        <Button sx={{ borderRadius: "50px" }} variant="contained">
          Hubs
        </Button>
        <Button
          sx={{
            borderRadius: "50px",
            backgroundColor: "lightgrey",
            color: "white",
          }}
        >
          Devices
        </Button>
        <Button onClick={handleClose} color="primary">
          <CloseIcon sx={{ color: "black" }} />
        </Button>
      </div>
      <DialogTitle>
        <b>List of Devices and Hubs</b>
        <p style={{ fontSize: 16 }}>{hospital.hospitalName}</p>
      </DialogTitle>
      <DialogContent>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
          {hubs.map((hub) => (
            <Card key={hub.HubId} sx={{ borderRadius: "20px", width: "12vw" }}>
              <CardContent>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <img
                    src={device_icon}
                    alt="Hub Image"
                    style={{ maxWidth: "100%" }}
                  />
                </div>
                <Typography sx={{ textAlign: "center" }} variant="h6">
                  <b>{hub.HubId}</b>
                </Typography>
                <Typography sx={{ textAlign: "center" }} variant="body1">
                  {hub.HubName}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "10px",
                  }}
                >
                  <Button
                    sx={{
                      height: 30,
                      borderRadius: "50px",
                      backgroundColor: "green",
                    }}
                    variant="contained"
                  >
                    {hub.Status}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ViewHospitalHubs;
