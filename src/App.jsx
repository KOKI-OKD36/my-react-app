import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import EventsPage from "./pages/EventsPage";
import EventDetail from "./components/EventDetail/EventDetail";
import ContactList from "./pages/ContactList";
import VolunteerForm from "./components/VolunteerForm/VolunteerForm";
import VendorForm from "./components/VendorForm/VendorForm";
import OtherContactForm from "./components/SuggestionBox/SuggestionBox";

import NotFound from "./pages/NotFound";

import "./App.css";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="app-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:id" element={<EventDetail />} />
            <Route path="/contact" element={<ContactList />} />
            <Route path="/contact/volunteer" element={<VolunteerForm />} />
            <Route path="/contact/vendor" element={<VendorForm />} />
            <Route path="/contact/other" element={<OtherContactForm />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
