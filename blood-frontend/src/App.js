import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Suggestions from './components/Suggestions';
import ChoicePage from './components/ChoicePage';
import MultiStepForm from './components/MultiStepForm';
import Navbar from './components/NavBar';
import AboutPage from './components/AboutPage';
import EmergencyRegister from './pages/EmergencyRegister';
import HealthEligibilityForm from './pages/HealthEligibilityForm';
import LoginPage from './pages/LoginPage';
import EmergencyLogin from './pages/EmergencyLogin';
import BloodDetailsSection from './components/BloodDetailsSection';
import BloodGroupDetails from './pages/BloodGroupDetails';
import Footer from './components/Footer';
import DonorHomePage from './pages/DonorHomePage';
import DonationCamps from './pages/DonationCamps';
import NearbyCentres from './pages/NearbyCentres';
import DonationProcedure from './pages/DonationProcedure';
import DonationTypes from './pages/DonationTypes';
import BookAppointment from './pages/BookAppointment';
import EmergencyAppointment from './pages/EmergencyAppointment';
import DonationHistory from './pages/DonationHistory';
import ReceiversHomePage from './pages/ReceiversHomePage';
import GalleryPage from './pages/GalleryPage';
import HelpPage from './pages/HelpPage';
import ContactPage from './pages/ContactPage';
import Dashboard from './pages/Dashboard';
import ProfilePage from './pages/ProfilePage';
import ScrollToTop from './components/ScrollToTop';
import Chatbot from './components/Chatbot';
import ForgotPassword from './pages/ForgotPasswordPage';

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
    <Navbar />
      <Routes>
        <Route path="/" element={<ChoicePage />} />
        <Route path="/register" element={<MultiStepForm />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/suggestions/:id" element={<Suggestions />} />
        <Route path="/emergency-register" element={<EmergencyRegister />} />
        <Route path="/donor-health-form" element={<HealthEligibilityForm />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/emergency-login" element={<EmergencyLogin />} />
        <Route path="/blood/:group" element={<BloodGroupDetails />} />
        <Route path="/donor-homepage" element={<DonorHomePage />} />
        <Route path="/receiver-homepage" element={<ReceiversHomePage />} />
        <Route path="/donation-camps" element={<DonationCamps />} />
        <Route path="/nearby-centres" element={<NearbyCentres />} />
        <Route path="/donation-procedure" element={<DonationProcedure />} />
        <Route path="/donation-types" element={<DonationTypes />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/emergency-appointment" element={<EmergencyAppointment />} />
        <Route path="/donation-history/:id" element={<DonationHistory />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/help" element={<HelpPage />} />
        {/* <Route path="/chatbot" element={<Chatbot />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
              </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;