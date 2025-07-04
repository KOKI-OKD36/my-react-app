import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";
import EventDetail from "./components/EventDetail/EventDetail";
import ContactList from "./pages/ContactList";
import VolunteerForm from "./components/VolunteerForm/VolunteerForm";
import VendorForm from "./components/VendorForm/VendorForm";
import OtherContactForm from "./components/SuggestionBox/SuggestionBox";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AdminPage from "./pages/Admin";
import VolunteerList from "./pages/VolunteerList";
import VendorList from "./pages/VendorList";
import EventRegister from "./pages/EventRegister";
import "./App.css";

function AppWrapper({ auth, setAuth }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated && auth.role === "admin") {
      navigate("/admin");
    }
  }, [auth, navigate]);

  return (
    <>
      <Navbar auth={auth} setAuth={setAuth} />
      <div className="app-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/contact" element={<ContactList />} />
          <Route path="/contact/volunteer" element={<VolunteerForm />} />
          <Route path="/contact/vendor" element={<VendorForm />} />
          <Route path="/contact/other" element={<OtherContactForm />} />
          <Route path="/login" element={<Login setAuth={setAuth} />} />

          {/* 管理者だけアクセス可 */}
          {auth.role === "admin" && (
            <>
              <Route path="/admin" element={<AdminPage />} />
              <Route path="/admin/volunteer" element={<VolunteerList />} />
              <Route path="/admin/vendor" element={<VendorList />} />
              <Route path="/admin/contact" element={<ContactList />} />
              <Route path="/admin/event-register" element={<EventRegister />} />
            </>
          )}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

function App() {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    username: null,
    role: null,
  });

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("auth"));
    if (saved?.isAuthenticated) {
      setAuth(saved);
    }
  }, []);

  return (
    <Router>
      <AppWrapper auth={auth} setAuth={setAuth} />
    </Router>
  );
}

export default App;
