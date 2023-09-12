import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./ViewHospitalHubs.module.scss";
import hubIcon from "./../../../../public/device_icon.jpeg";

interface Hub {
  HubId: number;
  HubName: string;
  Status: string;
}

const staticHubs: Hub[] = [
  { HubId: 1, HubName: "YNVH-A23-003", Status: "Online" },
  { HubId: 2, HubName: "YNVH-A23-003", Status: "Online" },
  { HubId: 3, HubName: "YNVH-A23-003", Status: "Online" },
  { HubId: 4, HubName: "YNVH-A23-003", Status: "Online" },
  { HubId: 5, HubName: "YNVH-A23-003", Status: "Offline" },
  { HubId: 6, HubName: "YNVH-A23-003", Status: "Offline" },
];

function Hubs() {
  return (
    <div>
    <b>List of Hubs</b>
    <br/>
    <br/>
    <div className={styles.container}>
      {staticHubs.map((hub) => (
        <Card key={hub.HubId} sx={{ borderRadius: "20px", width: "12vw" }}>
          <CardContent>
            <div
              className={styles.image}
              style={{
                border: `${
                  hub.Status === "Offline" ? "4px solid red" : "4px solid green"
                }`,
              }}
            >
              <img src={hubIcon} alt="Hub Image" className={styles.img} />
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
      ))}
    </div>
    </div>
  );
}

export default Hubs;
