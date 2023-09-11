import { useState } from "react";
import styles from "./../../dashboard_admin/dashboard2.module.scss";
import super_admin_styles from "./../../../component/sidebar/super_admin_styles.module.scss";
import search_icon from "./../../../../public/search_icon.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { SelectChangeEvent } from "@mui/material";
import ViewHospitalHubs from "./ViewHospitalHubs";
import TablePagination from "@mui/material/TablePagination";

const cityOptions: { value: string; label: string }[] = [
  { value: "SelectCity", label: "Select City" },
  { value: "hyderabad", label: "Hyderabad" },
];

function ViewHospitals() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState<string>("SelectCity");

  // const handleSearchTextChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const searchText = event.target.value;
  // };

  const handleCityChange = (event: SelectChangeEvent<typeof selectedCity>) => {
    setSelectedCity(event.target.value);
  };

  const hospitalData = [
    {
      hospitalName: "Apollo Hospital",
      city: "Hyderabad",
      noOfHubs: 4,
      noOfDevices: 327,
      purchasedDate: "31 Mar 2023",
      status: "Active",
    },
    {
      hospitalName: "Apollo Hospital",
      city: "Hyderabad",
      noOfHubs: 4,
      noOfDevices: 327,
      purchasedDate: "31 Mar 2023",
      status: "Active",
    },
    {
      hospitalName: "Apollo Hospital",
      city: "Hyderabad",
      noOfHubs: 4,
      noOfDevices: 327,
      purchasedDate: "31 Mar 2023",
      status: "Active",
    },
    {
      hospitalName: "Apollo Hospital",
      city: "Hyderabad",
      noOfHubs: 4,
      noOfDevices: 327,
      purchasedDate: "31 Mar 2023",
      status: "Active",
    },
    {
      hospitalName: "Apollo Hospital",
      city: "Hyderabad",
      noOfHubs: 4,
      noOfDevices: 327,
      purchasedDate: "31 Mar 2023",
      status: "Active",
    },
    {
      hospitalName: "Apollo Hospital",
      city: "Hyderabad",
      noOfHubs: 4,
      noOfDevices: 327,
      purchasedDate: "31 Mar 2023",
      status: "Active",
    },
    {
      hospitalName: "Apollo Hospital",
      city: "Hyderabad",
      noOfHubs: 4,
      noOfDevices: 327,
      purchasedDate: "31 Mar 2023",
      status: "Active",
    },
    {
      hospitalName: "Apollo Hospital",
      city: "Hyderabad",
      noOfHubs: 4,
      noOfDevices: 327,
      purchasedDate: "31 Mar 2023",
      status: "Active",
    },
    {
      hospitalName: "Apollo Hospital",
      city: "Hyderabad",
      noOfHubs: 4,
      noOfDevices: 327,
      purchasedDate: "31 Mar 2023",
      status: "Active",
    },
    {
      hospitalName: "Apollo Hospital",
      city: "Hyderabad",
      noOfHubs: 4,
      noOfDevices: 327,
      purchasedDate: "31 Mar 2023",
      status: "Active",
    },
    {
      hospitalName: "Apollo Hospital",
      city: "Hyderabad",
      noOfHubs: 4,
      noOfDevices: 327,
      purchasedDate: "31 Mar 2023",
      status: "Active",
    },
    {
      hospitalName: "Apollo Hospital",
      city: "Hyderabad",
      noOfHubs: 4,
      noOfDevices: 327,
      purchasedDate: "31 Mar 2023",
      status: "Active",
    },
    {
      hospitalName: "Apollo Hospital",
      city: "Hyderabad",
      noOfHubs: 4,
      noOfDevices: 327,
      purchasedDate: "31 Mar 2023",
      status: "Active",
    },
  ];

  const rowsPerPageOptions = [5, 10, 25];
  const defaultRowsPerPage = 5;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);

  const handleChangePage = (newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedHospital, setSelectedHospital] = useState(null);

  const handleVisibilityClick = (hospital: any) => {
    setSelectedHospital(hospital);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  const startIndex = page * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  const displayedData = hospitalData.slice(startIndex, endIndex);

  return (
    <>
      <div className={super_admin_styles.main_header}>
        <div className={super_admin_styles.main_header_top}>
          <div className={super_admin_styles.main_header_top_search}>
            <img src={search_icon} alt="" className="" />
            <input
              type="text"
              className="input_search"
              placeholder="Search"
              // onChange={handleSearchTextChange}
            />
          </div>
          <div
            className={super_admin_styles.header_profile}
            onClick={() => navigate("/")}
          >
            <AccountCircleIcon fontSize="large" />
          </div>
        </div>
        <div className={super_admin_styles.main_header_bottom}>
          <div className={super_admin_styles.welcome}>
            <h1 className={super_admin_styles.header_heading}>
              View Hospitals
            </h1>
            <p>Your dashboard</p>
          </div>
          <div>
            <Select
              sx={{ height: 35, backgroundColor: "white", borderRadius: '30px',color:"blue"}}
              value={selectedCity}
              onChange={handleCityChange}
              variant="outlined"
              
            >
              {cityOptions.map((city) => (
                <MenuItem key={city.value} value={city.value}>
                  {city.label}
                </MenuItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className={super_admin_styles.main_info_right}>
        <div className={styles.container}>
          <div>
            <div
              style={{
                backgroundColor: "white",
                marginLeft: "2rem",
                marginTop: "110px",
                width: "65vw",
                padding: "50px",
                borderRadius: "30px",
              }}
            >
              <div>
                <TableContainer component={Paper}  style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)' }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell></TableCell>
                        <TableCell
                          style={{
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <b>Hospital Name</b>
                        </TableCell>
                        <TableCell
                          style={{
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <b>City</b>
                        </TableCell>
                        <TableCell
                          style={{
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <b>No. of Hubs</b>
                        </TableCell>
                        <TableCell
                          style={{
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <b>No. of Devices</b>
                        </TableCell>
                        <TableCell
                          style={{
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <b>Purchased Date</b>
                        </TableCell>
                        <TableCell
                          style={{
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <b>Status</b>
                        </TableCell>
                        <TableCell
                          style={{
                            textAlign: "center",
                            verticalAlign: "middle",
                          }}
                        >
                          <b>Action</b>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {displayedData.map((hospital, index) => (
                        <TableRow key={index}>
                          <TableCell
                            style={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            <LocalHospitalIcon
                              style={{ color: "red", fontSize: 36 }}
                            />
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            {hospital.hospitalName}
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            {hospital.city}
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            {hospital.noOfHubs}
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            {hospital.noOfDevices}
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            {hospital.purchasedDate}
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            <Button style={{ color: "green" }}>
                              {hospital.status}
                            </Button>
                          </TableCell>
                          <TableCell
                            style={{
                              textAlign: "center",
                              verticalAlign: "middle",
                            }}
                          >
                            <EditIcon style={{ color: "green" }} />
                            <DeleteIcon style={{ color: "red" }} />
                            <VisibilityIcon
                              onClick={() => handleVisibilityClick(hospital)}
                              style={{ cursor: "pointer" }}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                count={hospitalData.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={(_, newPage) => handleChangePage(newPage)}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
              {selectedHospital && (
                <ViewHospitalHubs
                  open={popupOpen}
                  handleClose={handleClosePopup}
                  hospital={selectedHospital}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewHospitals;
