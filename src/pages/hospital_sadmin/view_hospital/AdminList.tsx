import React, { useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import TablePagination from "@mui/material/TablePagination";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

interface AdminList {
  id: number;
  staffName: string;
  role: string;
  phoneNo: number;
  address: string;
  department: string;
  email: string;
}

export const AdminList = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [allRows, setAllRows] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const adminListData: AdminList[] = [
    {
      id: 1,
      staffName: "John Doe",
      role: "Doctor",
      phoneNo: 9876543210,
      address: "Madhapur",
      department: "Emergency",
      email: "admin200@gmail.com",
    },
    {
      id: 2,
      staffName: "John Doe",
      role: "Doctor",
      phoneNo: 9876543210,
      address: "Madhapur",
      department: "Emergency",
      email: "admin200@gmail.com",
    },
    {
      id: 3,
      staffName: "John Doe",
      role: "Doctor",
      phoneNo: 9876543210,
      address: "Madhapur",
      department: "Emergency",
      email: "admin200@gmail.com",
    },
    {
      id: 4,
      staffName: "John Doe",
      role: "Doctor",
      phoneNo: 9876543210,
      address: "Madhapur",
      department: "Emergency",
      email: "admin200@gmail.com",
    },
    {
      id: 5,
      staffName: "John Doe",
      role: "Doctor",
      phoneNo: 9876543210,
      address: "Madhapur",
      department: "Emergency",
      email: "admin200@gmail.com",
    },
    {
      id: 6,
      staffName: "John Doe",
      role: "Doctor",
      phoneNo: 9876543210,
      address: "Madhapur",
      department: "Emergency",
      email: "admin200@gmail.com",
    },
    {
      id: 7,
      staffName: "John Doe",
      role: "Doctor",
      phoneNo: 9876543210,
      address: "Madhapur",
      department: "Emergency",
      email: "admin200@gmail.com",
    },
    {
      id: 8,
      staffName: "John Doe",
      role: "Doctor",
      phoneNo: 9876543210,
      address: "Madhapur",
      department: "Emergency",
      email: "admin200@gmail.com",
    },
    {
      id: 9,
      staffName: "John Doe",
      role: "Doctor",
      phoneNo: 9876543210,
      address: "Madhapur",
      department: "Emergency",
      email: "admin200@gmail.com",
    },
  ];

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = parseInt(event.target.value, 10);
    if (value === -1) {
      setAllRows(true);
      setRowsPerPage(adminListData.length);
    } else {
      setAllRows(false);
      setRowsPerPage(value);
      setPage(0);
    }
  };

  const handleAdminListClick = () => {
    navigate(`/viewHospitals/:index/add-admin`);
  };
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "20px",
          }}
        >
          <FormControl>
            <Button
              variant="contained"
              onClick={handleAdminListClick}
            >
              Add Admin
            </Button>
          </FormControl>
        </div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ height: "80px" }}>
                <TableCell sx={{ color: "grey", fontSize: "16px" }}>
                  ID
                </TableCell>
                <TableCell sx={{ color: "grey", fontSize: "16px" }}>
                  Staff Name
                </TableCell>
                <TableCell sx={{ color: "grey", fontSize: "16px" }}>
                  Role
                </TableCell>
                <TableCell sx={{ color: "grey", fontSize: "16px" }}>
                  Phone Number
                </TableCell>
                <TableCell sx={{ color: "grey", fontSize: "16px" }}>
                  Address
                </TableCell>
                <TableCell sx={{ color: "grey", fontSize: "16px" }}>
                  Department
                </TableCell>
                <TableCell sx={{ color: "grey", fontSize: "16px" }}>
                  Email
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminListData
                .slice(startIndex, allRows ? adminListData.length : endIndex)
                .map((AdminList) => (
                  <TableRow
                    key={AdminList.id}
                    style={{
                      height: "80px",
                      backgroundColor:
                        AdminList.id % 2 === 0 ? "#ffffff" : "whitesmoke",
                    }}
                  >
                    <TableCell>{AdminList.id}</TableCell>
                    <TableCell>{AdminList.staffName}</TableCell>
                    <TableCell>{AdminList.role}</TableCell>
                    <TableCell>{AdminList.phoneNo}</TableCell>
                    <TableCell>{AdminList.address}</TableCell>
                    <TableCell>{AdminList.department}</TableCell>
                    <TableCell>{AdminList.email}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
          component="div"
          count={adminListData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};
