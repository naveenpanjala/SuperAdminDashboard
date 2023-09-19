import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import styles from "./ViewHospitalHubs.module.scss";
import device_icon from "./../../../../public/cardiology_icon.png";

interface Device {
  deviceId: number;
  deviceName: string;
  deviceStatus: string;
}
const devices: Device[] = [
  { deviceId: 1, deviceName: "YNVC-A23-012", deviceStatus: "Online" },
  { deviceId: 2, deviceName: "YNVC-A23-012", deviceStatus: "Online" },
  { deviceId: 3, deviceName: "YNVC-A23-012", deviceStatus: "Offline" },
  { deviceId: 4, deviceName: "YNVC-A23-012", deviceStatus: "Online" },
  { deviceId: 5, deviceName: "YNVC-A23-012", deviceStatus: "Online" },
  { deviceId: 6, deviceName: "YNVC-A23-012", deviceStatus: "Offline" },
];
function Devices() {
  const [filter, setFilter] = useState("all");

  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value as string);
  };
  const filteredDevices = devices.filter((device) => {
    if (filter === "all") return true;
    return device.deviceStatus === filter;
  });

  return (
    <>
    <div style={{ display: "flex", alignItems: "center",marginBottom:"20px" }}>
     <p style={{ margin: 0 }}><b>List of Devices</b></p>
      <div style={{ marginLeft: "auto" }}>
        <Select
          sx={{
            borderRadius: "20px",
            height: "40px",
            width: "100px",
            textAlign: "center",
          }}
          value={filter}
          onChange={handleFilterChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="Online">Online</MenuItem>
          <MenuItem value="Offline">Offline</MenuItem>
        </Select>
      </div>
      
     
    </div>
    <div className={styles.container}>
        {filteredDevices.map((device) => (
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
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Devices;
