import { BrowserRouter, Route, Routes } from "react-router-dom";
import SuperAdminSidebar from "./component/sidebar/SuperAdminSidebar";
import Super_Admin_Dashboard from "./pages/dashboard_admin/dashboard";
import AddHospital from "./pages/hospital_sadmin/add_hospital/AddHospital";
import ViewHospitals from "./pages/hospital_sadmin/view_hospital/ViewHospitals";
import Tickets from "./pages/hospital_sadmin/tickets/Tickets";
import HospitalDetails from "./pages/hospital_sadmin/view_hospital/HospitalDetails";
import  TicketDetails  from "./pages/hospital_sadmin/tickets/TicketDetails";
import { AddHospitalDetails } from "./pages/hospital_sadmin/add_hospital/AddHospitalDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SuperAdminSidebar />}>
          <Route index element={<Super_Admin_Dashboard />} />
          <Route path="addHospital" element={<AddHospital />} />
          <Route path="addHospital/form" element={<AddHospitalDetails/>}></Route>
          <Route path="viewHospitals" element={<ViewHospitals />} />
          <Route path="viewHospitals/:index" element={<HospitalDetails />} />
          <Route path="tickets" element={<Tickets/>} />
          <Route path="tickets/ticket/:ticketId" element={<TicketDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
