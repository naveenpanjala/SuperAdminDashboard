import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./TicketDetails.module.scss";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ylogo from "./../../../../public/yantram_logo.png"


const TicketDetails: React.FC = () => {
  const [status, setStatus] = useState("");
  const [assigned, setAssigned] = useState("");
  const [priority, setPriority] = useState("");

  const { ticketId } = useParams();

  return (
    <div className={styles.container}>
      <div className={styles.container_ticketdetailsTop}>
        <h2>Ticket ID: {ticketId}</h2>
        <div>
          {/* <h2>Ticket Detail</h2> */}
          <Button
            // style={{ marginLeft: "60%", height: "50%", marginTop: "20px" }}
            variant="contained"
            color="primary"
          >
            Close Ticket
          </Button>
        </div>
      </div>

      <div className={styles.container_ticketdetailsRight}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            border: "1px solid black",
            height: "auto",
            padding: "50px",
          }}
        >
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              label="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value as string)}
            >
              <MenuItem value="Open">Open</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Closed">Closed</MenuItem>
            </Select>
          </FormControl>
          <img src={ylogo} alt="" className={styles.profile} />
          <FormControl>
            <InputLabel>
              <b>Hospital Name:</b> Apollo Hospital
            </InputLabel>
          </FormControl>
          <FormControl>
            <InputLabel>
              <b>Hospital Id:</b> 101
            </InputLabel>
          </FormControl>
          <FormControl></FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Assigned To</InputLabel>
            <Select
              label="Assigned To"
              value={assigned}
              onChange={(e) => setAssigned(e.target.value as string)}
            >
              <MenuItem value="John Doe">John Doe</MenuItem>
              <MenuItem value="Smith">Smith</MenuItem>
              <MenuItem value="Joy">Joy</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="outlined" fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select
              label="Priority"
              value={priority}
              onChange={(e) => setPriority(e.target.value as string)}
            >
              <MenuItem value="Low">Low</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="High">High</MenuItem>
            </Select>
          </FormControl>
          <FormControl>
            <InputLabel>
              <b>Request time:</b> 10:45 AM
            </InputLabel>
          </FormControl>
          <FormControl>
            <InputLabel>
              <b>Due Date:</b> 10/09/2023
            </InputLabel>
          </FormControl>
          <FormControl>
            <InputLabel>
              <b>Note:</b> note
            </InputLabel>
          </FormControl>
       <FormControl></FormControl>
       <FormControl></FormControl>
       <FormControl></FormControl>
       <FormControl></FormControl>
        </div>
      </div>
      <div
        className={styles.container_ticketdetailsBottom}
        style={{ border: "1px solid black" }}
      >
         <div className={styles.chatContainer}>
        <div className={styles.chatMessage}>
          <div className={styles.messageText}>Hello!</div>
          <div className={styles.messageTime}>10:00 AM</div>
        </div>

        <div className={styles.chatMessage}>
          <div className={styles.messageText}>Hi there!</div>
          <div className={styles.messageTime}>10:05 AM</div>
        </div>

        <div className={styles.chatMessage}>
          <div className={styles.messageText}>How can I assist you today?</div>
          <div className={styles.messageTime}>10:10 AM</div>
        </div>

        {/* Add more chat messages here */}
      </div>

      <div className={styles.chatInputContainer}>
        <input 
          type="text"
          placeholder="Type your message..."
          className={styles.chatInput}
        />
        <button className={styles.sendButton}>Send</button>
      </div>
      </div>
    </div>
  );
};

export default TicketDetails;
