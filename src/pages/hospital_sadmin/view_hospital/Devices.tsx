import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
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
  return (
    <div>
      <b>List of Devices</b>
      <br />
      <br />
      <div className={styles.container}>
        {devices.map((device) => (
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
    </div>
  );
}

export default Devices;
