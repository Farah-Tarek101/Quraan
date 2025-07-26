import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomeContent from './pages/home/home';
import Quran from './pages/Quran';
import DailyVerses from './pages/daily-verses';
import Hadith from './pages/hadith';
import Prayers from './pages/prayers';

function App() {
  console.log('App component is rendering'); // Debug log
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeContent />} />
        <Route path="/quran" element={<Quran />} />
        <Route path="/daily-verses" element={<DailyVerses />} />
        <Route path="/hadith" element={<Hadith />} />
        <Route path="/prayers" element={<Prayers />} />
        <Route path="/test" element={<div style={{padding: '50px', fontSize: '24px'}}>Test Page - Routing is working!</div>} />
        <Route path="/tafsir" element={<div>Quran Tafsir Page - Coming Soon</div>} />
        <Route path="/calendar" element={<div>Islamic Calendar Page - Coming Soon</div>} />
        <Route path="/qibla" element={<div>Qibla Direction Page - Coming Soon</div>} />
        <Route path="/login" element={<div>Login Page - Coming Soon</div>} />
        <Route path="/signup" element={<div>Signup Page - Coming Soon</div>} />
        <Route path="/profile" element={<div>Profile Page - Coming Soon</div>} />
        <Route path="/aboutus" element={<div>About Us Page - Coming Soon</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
