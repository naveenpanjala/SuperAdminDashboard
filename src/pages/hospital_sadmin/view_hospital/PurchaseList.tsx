import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";


interface Purchase {
  date: string;
  typeOfPurchase: string;
  numberOfHubs: string | number;
  numberOfDevices: string | number;
  cost: string | number;
}

const PurchaseList = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [purchaseData, setPurchaseData] = useState({
    date: "",
  typeOfPurchase: "",
  numberOfHubs: "",
  numberOfDevices: "",
  cost: "",
  });
  const [purchases, setPurchases] = useState<Purchase[]>([]);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setPurchaseData({ ...purchaseData, [name]: value });
  };

  const handleAddPurchase = () => {
   
    
    setPurchases([...purchases, purchaseData]);
  
    setPurchaseData({
        date: "",
        typeOfPurchase: "",
        numberOfHubs: "",
        numberOfDevices: "",
        cost: "",
    });
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "flex-end", marginBottom:"20px"}}>
        <Button variant="contained" onClick={handleOpenPopup}>
          Purchase List
        </Button>
      </div>
      <Dialog open={isPopupOpen} onClose={handleClosePopup}>
        <DialogTitle>Add Purchase</DialogTitle>
        <DialogContent>
          <TextField
            label="Date of Purchase"
            type="date"
            name="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={purchaseData.date}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: 2, marginTop: 2 }}
          />
          <FormControl fullWidth sx={{ marginBottom: 2 }} >
            <InputLabel>Type of Purchase</InputLabel>
            <Select
            label="Type Of Purchase"
              value={purchaseData.typeOfPurchase}
              onChange={handleInputChange}
              name="typeOfPurchase"
            >
              <MenuItem value="Free">Free</MenuItem>
              <MenuItem value="Paid">Paid</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="Number of Hubs"
            type="number"
            name="numberOfHubs"
            value={purchaseData.numberOfHubs}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Number of Devices"
            type="number"
            name="numberOfDevices"
            value={purchaseData.numberOfDevices}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Cost"
            type="number"
            name="cost"
            value={purchaseData.cost}
            onChange={handleInputChange}
            fullWidth
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" onClick={handleAddPurchase}>
            Submit
          </Button>
        </DialogContent>
      </Dialog>
      {purchases.length > 0 ? (
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><b>Date of Purchase</b></TableCell>
            <TableCell><b>Type of Purchase</b></TableCell>
            <TableCell><b>Number of Hubs</b></TableCell>
            <TableCell><b>Number of Devices</b></TableCell>
            <TableCell><b>Cost</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {purchases.map((purchase, index) => (
            <TableRow key={index}>
              <TableCell>{purchase.date}</TableCell>
              <TableCell>{purchase.typeOfPurchase}</TableCell>
              <TableCell>{purchase.numberOfHubs}</TableCell>
              <TableCell>{purchase.numberOfDevices}</TableCell>
              <TableCell>{purchase.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
       ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default PurchaseList;
