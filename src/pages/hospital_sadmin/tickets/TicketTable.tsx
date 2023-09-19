import React, { useState, useEffect } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TablePagination from "@mui/material/TablePagination";
import { useNavigate } from "react-router-dom";


interface Ticket {
  id: number;
  priority: string;
  hospitalName: string;
  status: string;
  dueBy: string;
  type: string;
  assignedTo: string;
}

const TicketTable: React.FC = () => {
    
  const navigate = useNavigate();
  const [filteredData, setFilteredData] = useState<Ticket[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [page, setPage] = useState(0);
  const [allRows, setAllRows] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const ticketData: Ticket[] = [
    {
      id: 1,
      priority: "High",
      hospitalName: "Hospital A",
      status: "Open",
      dueBy: "2023-09-30",
      type: "Emergency",
      assignedTo: "Test22",
    },
    {
      id: 2,
      priority: "Medium",
      hospitalName: "Hospital B",
      status: "Closed",
      dueBy: "2023-10-15",
      type: "Inpatient",
      assignedTo: "Sid",
    },
    {
      id: 3,
      priority: "Low",
      hospitalName: "Hospital C",
      status: "Paused",
      dueBy: "2023-11-05",
      type: "Inpatient",
      assignedTo: "Test25",
    },
    {
      id: 4,
      priority: "High",
      hospitalName: "Hospital D",
      status: "Assigned",
      dueBy: "2023-10-25",
      type: "OPD",
      assignedTo: "Test",
    },
    {
      id: 5,
      priority: "Medium",
      hospitalName: "Hospital E",
      status: "Unassigned",
      dueBy: "2023-11-10",
      type: "OPD",
      assignedTo: "Test",
    },
    {
      id: 6,
      priority: "High",
      hospitalName: "Hospital A",
      status: "Open",
      dueBy: "2023-09-30",
      type: "Emergency",
      assignedTo: "Test22",
    },
    {
      id: 7,
      priority: "Medium",
      hospitalName: "Hospital B",
      status: "Closed",
      dueBy: "2023-10-15",
      type: "Inpatient",
      assignedTo: "Sid",
    },
    {
      id: 8,
      priority: "Low",
      hospitalName: "Hospital C",
      status: "Paused",
      dueBy: "2023-11-05",
      type: "Inpatient",
      assignedTo: "Test25",
    },
    {
      id: 9,
      priority: "High",
      hospitalName: "Hospital D",
      status: "Assigned",
      dueBy: "2023-10-25",
      type: "OPD",
      assignedTo: "Test",
    },
  ];


  const handleFilterChange = (event: SelectChangeEvent<string>) => {
    const selectedStatus = event.target.value;
    setStatusFilter(selectedStatus);

    if (selectedStatus === "all") {
      setFilteredData(ticketData);
    } else {
      const filtered = ticketData.filter(
        (ticket) => ticket.status === selectedStatus
      );
      setFilteredData(filtered);
    }
  };

  useEffect(() => {
    setFilteredData(ticketData);
  }, []);

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const slicedData = filteredData.slice(startIndex, endIndex);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (value === -1) {
      setAllRows(true);
      setRowsPerPage(filteredData.length);
    } else {
      setAllRows(false);
      setRowsPerPage(value);
      setPage(0);
    }
  };

  const handleRowClick = (ticketId: number) => {
    navigate(`/tickets/ticket/${ticketId}`);
  };

  return (
    <div>
      <FormControl
        style={{ display: "flex", flexDirection: "column", marginLeft: "86%" }}
      >
        <Select
          sx={{ height: "40px", padding: "10px", borderRadius: "20px" }}
          value={statusFilter}
          onChange={handleFilterChange}
        >
          <MenuItem value="all">All Tickets</MenuItem>
          <MenuItem value="Open">Open</MenuItem>
          <MenuItem value="Closed">Closed</MenuItem>
          <MenuItem value="Paused">Paused</MenuItem>
          <MenuItem value="Assigned">Assigned</MenuItem>
          <MenuItem value="Unassigned">Unassigned</MenuItem>
        </Select>
        <br />
      </FormControl>
      <TableContainer component={Paper}   style={{ boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)" }}>
        <Table >
          <TableHead>
            <TableRow sx={{height:"65px"}}>
              <TableCell>
                <b>Ticket ID</b>
              </TableCell>
              <TableCell>
                <b>Priority</b>
              </TableCell>
              <TableCell>
                <b>Hospital Name</b>
              </TableCell>
              <TableCell>
                <b>Status</b>
              </TableCell>
              <TableCell>
                <b>Due By</b>
              </TableCell>
              <TableCell>
                <b>Type</b>
              </TableCell>
              <TableCell>
                <b>Assigned To</b>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedData.map((ticket) => (
              <TableRow
                key={ticket.id}
                style={{ cursor: "pointer",height:"65px"}}
                onClick={() => handleRowClick(ticket.id)}
              >
                <TableCell>{ticket.id}</TableCell>
                <TableCell>{ticket.priority}</TableCell>
                <TableCell>{ticket.hospitalName}</TableCell>
                <TableCell>{ticket.status}</TableCell>
                <TableCell>{ticket.dueBy}</TableCell>
                <TableCell>{ticket.type}</TableCell>
                <TableCell>{ticket.assignedTo}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default TicketTable;
