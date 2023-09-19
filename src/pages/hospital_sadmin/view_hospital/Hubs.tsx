import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import styles from "./ViewHospitalHubs.module.scss";
import hubIcon from "./../../../../public/device_icon.jpeg";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";


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

  const [filter, setFilter] = useState("all");
  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    setFilter(event.target.value as string);
  };
  const filteredHubs = staticHubs.filter((hub) => {
    if (filter === "all") return true;
    return hub.Status === filter;
  });
  return (
    <>
      <div style={{ display: "flex", alignItems: "center",marginBottom:"20px" }}>
     <p style={{ margin: 0 }}><b>List of Hubs</b></p>
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
    <div>
    <div className={styles.container}>
    {filteredHubs.map((hub) => (
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
    </>
  );
}

export default Hubs;
