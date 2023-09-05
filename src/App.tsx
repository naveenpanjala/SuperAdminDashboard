import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuperAdminSidebar from "./component/sidebar/SuperAdminSidebar";
import Super_Admin_Dashboard from "./pages/dashboard_admin/dashboard";
import AddHospital from "./pages/hospital_sadmin/add_hospital/AddHospital";
import ViewHospitals from "./pages/hospital_sadmin/view_hospital/ViewHospitals";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SuperAdminSidebar />}>
          <Route index element={<Super_Admin_Dashboard />} />
          <Route path="addHospital" element={<AddHospital />} />
          <Route path="viewHospitals" element={<ViewHospitals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
