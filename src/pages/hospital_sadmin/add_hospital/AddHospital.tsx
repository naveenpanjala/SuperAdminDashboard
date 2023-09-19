import React, { useState } from "react";
import styles from "./../../dashboard_admin/dashboard2.module.scss";
import super_admin_styles from "./../../../component/sidebar/super_admin_styles.module.scss";
import search_icon from "./../../../../public/search_icon.png";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import { Select, SelectChangeEvent } from "@mui/material";
import Lottie from "lottie-react";
import hospital from "./hospitalGif.json";

const cityOptions: { value: string; label: string }[] = [
  { value: "SelectCity", label: "Select City" },
  { value: "hyderabad", label: "Hyderabad" },
];
const countryOptions: { value: string; label: string }[] = [
  { value: "SelectCountry", label: "Select Country" },
  { value: "India", label: "India" },
];
const stateOptions: { value: string; label: string }[] = [
  { value: "SelectState", label: "Select State" },
  { value: "Telangana", label: "Telangana" },
];

function AddHospital() {
  const navigate = useNavigate();
  const [selectedCity, setSelectedCity] = useState<string>("SelectCity");
  const [selectedCountry, setSelectedCountry] =
    useState<string>("SelectCountry");
  const [selectedState, setSelectedState] = useState<string>("SelectState");
  const [hospitalInfo, setHospitalInfo] = useState({
    hospitalName: "",
    hospitalGroup: "",
    address: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
    phone: "",
    email: "",
    website: "",
  });

  // const handleSearchTextChange = (
  //   event: React.ChangeEvent<HTMLInputElement>
  // ) => {
  //   const searchText = event.target.value;
  // };

  const handleCityChange = (event: SelectChangeEvent<string>) => {
    setSelectedCity(event.target.value);
  };

  const handleCountryChange = (event: SelectChangeEvent<string>) => {
    setSelectedCountry(event.target.value);
  };

  const handleStateChange = (event: SelectChangeEvent<string>) => {
    setSelectedState(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setHospitalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleNext = () => {
    navigate('/addHospital/form');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

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
            <h1 className={super_admin_styles.header_heading}>Add Hospital</h1>
            <p>Your dashboard</p>
          </div>
        </div>
      </div>
      <div className={super_admin_styles.main_info_right}>
        <div className={styles.container}>
          <form onSubmit={handleSubmit} className={styles.add_hospital}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Hospital Name"
                  variant="outlined"
                  name="hospitalName"
                  value={hospitalInfo.hospitalName}
                  onChange={handleInputChange}
                  fullWidth
                  // required
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Hospital Group"
                  variant="outlined"
                  name="hospitalGroup"
                  value={hospitalInfo.hospitalGroup}
                  onChange={handleInputChange}
                  fullWidth
                  // required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Address"
                  variant="outlined"
                  name="address"
                  value={hospitalInfo.address}
                  onChange={handleInputChange}
                  fullWidth
                  multiline
                  rows={3}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>Country</InputLabel>
                  <Select
                    name="country"
                    label="country"
                    value={selectedCountry}
                    onChange={handleCountryChange}
                    required
                  >
                    {countryOptions.map((country) => (
                      <MenuItem key={country.value} value={country.value}>
                        {country.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>State</InputLabel>
                  <Select
                    name="state"
                    label="State"
                    value={selectedState}
                    onChange={handleStateChange}
                    // required
                  >
                    {stateOptions.map((state) => (
                      <MenuItem key={state.value} value={state.value}>
                        {state.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <FormControl fullWidth variant="outlined">
                  <InputLabel>City</InputLabel>
                  <Select
                    name="city"
                    label="City"
                    value={selectedCity}
                    onChange={handleCityChange}
                    // required
                  >
                    {cityOptions.map((city) => (
                      <MenuItem key={city.value} value={city.value}>
                        {city.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Pincode"
                  variant="outlined"
                  name="pincode"
                  value={hospitalInfo.pincode}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={8}>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  name="phone"
                  value={hospitalInfo.phone}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={hospitalInfo.email}
                  onChange={handleInputChange}
                  fullWidth
                  // required
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  label="Website"
                  variant="outlined"
                  name="website"
                  value={hospitalInfo.website}
                  onChange={handleInputChange}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleNext}
                  color="primary"
                  style={{
                    // width: "120px",
                    // marginTop: "16px",
                    // borderRadius: "20px",
                    marginLeft: "80%",
                  }}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </form>
          <div>
            <Lottie
              animationData={hospital}
              style={{ width: "130%", marginLeft: "38rem", marginTop: "20rem" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddHospital;
