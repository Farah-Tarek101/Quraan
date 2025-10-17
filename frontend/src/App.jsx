import { Routes, Route } from 'react-router-dom';
import FullScreenMessage from './components/FullScreenMsg/FullScreenMessage';
import QuranContainer from './components/QuranSec/QuranContainer';
import AzkarPage from './pages/Azkar/AzkarPage';
import PrayerPage from './pages/Prayer/PrayerPage';
import HadithPage from './pages/Hadith/HadithPage';
import TasbihPage from './pages/Tasbih/TasbihPage'; // Import the new TasbihPage
import HomePage from './pages/HomePage/HomePage';
import Navbar from './components/navbar/Navbar';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './components/ThemeToggle';
import LoginPage from './pages/Auth/LoginPage'; // Import LoginPage
import SignupPage from './pages/Auth/SignupPage'; // Import SignupPage
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import './App.css';

function App() {
  const QuranPage = () => (
    <>
      <Navbar />
      <QuranContainer />
      <Footer />
    </>
  );

  const TasbihWrapperPage = () => (
    <>
      <Navbar />
      <TasbihPage />
      <Footer />
    </>
  );

  return (
    <ThemeProvider>
      <AuthProvider> {/* Wrap the entire application with AuthProvider */}
        <FullScreenMessage show={false} clickable={true} />
        <Routes>
          <Route path="/login" element={<LoginPage />} /> {/* Add new route for login */}
          <Route path="/signup" element={<SignupPage />} /> {/* Add new route for signup */}
          <Route path="/" element={<HomePage />} />
          <Route path="/prayers" element={<PrayerPage />} />
          <Route path="/azkar" element={<AzkarPage />} />
          <Route path="/quran" element={<QuranPage />} />
          <Route path="/Hadith"element={<HadithPage />} />
          <Route path="/tasbih" element={<TasbihWrapperPage />} /> {/* Use the wrapper for Tasbih page */}
        </Routes>
      </AuthProvider> {/* Close AuthProvider */}
    </ThemeProvider>
  );
}

export default App;
