
  import Dialog from "@mui/material/Dialog";
  import DialogContent from "@mui/material/DialogContent";
  import DialogTitle from "@mui/material/DialogTitle";
  import Button from "@mui/material/Button";
  import CloseIcon from "@mui/icons-material/Close";
  import Card from "@mui/material/Card";
  import CardContent from "@mui/material/CardContent";
  import Typography from "@mui/material/Typography";
  import styles from "./ViewHospitalHubs.module.scss";
  import device_icon from "./../../../../public/cardiology_icon.png";
  import hubIcon from "./../../../../public/device_icon.jpeg";
  import { useState } from "react";
  
  interface Hospital {
    hospitalName: string;
  }
  
  interface Hub {
    HubId: number;
    HubName: string;
    Status: string;
  }
  
  interface Device {
    deviceId: number;
    deviceName: string;
    deviceStatus: string;
  }
  
  interface Props {
    open: boolean;
    handleClose: () => void;
    hospital: Hospital;
  }
  
  function ViewHospitalHubs({ open, handleClose, hospital }: Props) {
    const [activeTab, setActiveTab] = useState("Hubs");
  
    const hubs: Hub[] = [
      { HubId: 1, HubName: "YNVH-A23-003", Status: "Online" },
      { HubId: 2, HubName: "YNVH-A23-003", Status: "Online" },
      { HubId: 3, HubName: "YNVH-A23-003", Status: "Online" },
      { HubId: 4, HubName: "YNVH-A23-003", Status: "Online" },
      { HubId: 5, HubName: "YNVH-A23-003", Status: "Offline" },
      { HubId: 6, HubName: "YNVH-A23-003", Status: "Offline" },
    ];
  
    const devices: Device[] = [
      { deviceId: 1, deviceName: "YNVC-A23-012", deviceStatus: "Online" },
      { deviceId: 2, deviceName: "YNVC-A23-012", deviceStatus: "Online" },
      { deviceId: 3, deviceName: "YNVC-A23-012", deviceStatus: "Offline" },
      { deviceId: 4, deviceName: "YNVC-A23-012", deviceStatus: "Online" },
      { deviceId: 5, deviceName: "YNVC-A23-012", deviceStatus: "Online" },
      { deviceId: 6, deviceName: "YNVC-A23-012", deviceStatus: "Offline" },
      // Add more device data as needed
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
          <Button
            sx={{ borderRadius: "50px" }}
            variant="contained"
            onClick={() => setActiveTab("Hubs")}
          >
            Hubs
          </Button>
          <Button
            sx={{ borderRadius: "50px" }}
            variant="contained"
            onClick={() => setActiveTab("Devices")}
          >
            Devices
          </Button>
          <Button onClick={handleClose} color="primary">
            <CloseIcon sx={{ color: "black" }} />
          </Button>
        </div>
        <DialogTitle>
          <b>List of {activeTab}</b>
          <p style={{ fontSize: 16 }}>{hospital.hospitalName}</p>
        </DialogTitle>
        <DialogContent>
          <div className={styles.container}>
            {activeTab === "Hubs"
              ? hubs.map((hub) => (
                  <Card
                    key={hub.HubId}
                    sx={{ borderRadius: "20px", width: "12vw" }}
                  >
                    <CardContent>
                      <div
                        className={styles.image}
                        style={{
                          border: `${
                            hub.Status === "Offline"
                              ? "4px solid red"
                              : "4px solid green"
                          }`,
                        }}
                      >
                        <img
                          src={hubIcon}
                          alt="Hub Image"
                          className={styles.img}
                        />
                      </div>
                      <Typography sx={{ textAlign: "center" }} variant="h6">
                        <b>{hub.HubId}</b>
                      </Typography>
                      <Typography sx={{ textAlign: "center" }} variant="body1">
                        {hub.HubName}
                      </Typography>
                      <div className={styles.status}>
                        <div>
                          {hub.Status === "Online" ? (
                            <div className={styles.online_icon}></div>
                          ) : (
                            <div className={styles.offline_icon}></div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              : devices.map((device) => (
                  <Card
                    key={device.deviceId}
                    sx={{ borderRadius: "20px", width: "12vw" }}
                  >
                    <CardContent>
                      <div
                        className={styles.image}
                        style={{
                          border: `${
                            device.deviceStatus === "Offline"
                              ? "4px solid red"
                              : "4px solid green"
                          }`,
                        }}
                      >
                        <img
                          src={device_icon}
                          alt="Device Image"
                          className={styles.img}
                        />
                      </div>

                      <Typography sx={{ textAlign: "center" }} variant="h6">
                        <b>{device.deviceId}</b>
                      </Typography>
                      <Typography sx={{ textAlign: "center" }} variant="body1">
                        {device.deviceName}
                      </Typography>
                      <div className={styles.status}>
                        <div>
                          {device.deviceStatus === "Online" ? (
                            <div className={styles.online_icon}></div>
                          ) : (
                            <div className={styles.offline_icon}></div>
                          )}
                        </div>
                      </div>
                      {/* <div className={styles.connection}>
                        <img
                          src={hubIcon}
                          alt=""
                          style={{ height: "1rem", width: "1rem" }}
                        />
                        Connected to {device.deviceName}
                      </div> */}
                    </CardContent>
                  </Card>
                ))}
          </div>
        </DialogContent>
      </Dialog>
    );
  }
  
  export default ViewHospitalHubs;
  