# Quran Kareem - Islamic Web Application

<div align="center">
  <img src="public/logo.png" alt="Quran Kareem Logo" width="120" height="120">
  
  **A comprehensive Islamic web application built with React**
  
  [![React](https://img.shields.io/badge/React-19.1.0-blue.svg)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.3.5-purple.svg)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
</div>

##  Overview

Quran Kareem is a modern, responsive Islamic web application that serves the Muslim community with essential daily tools. Built with React and designed with Arabic RTL support, it provides a seamless experience for reading the Quran, checking prayer times, accessing daily Islamic remembrances (Azkar), exploring Hadith, and utilizing a digital Tasbih. It's designed to strengthen faith and increase religious knowledge.

  
##  Features

**User Authentication**
- Secure user registration and login
- Token-based authentication for protected routes
- User profiles and personalized settings

**Complete Quran Reader**
- Browse all 114 Surahs of the Holy Quran
- Audio recitation with play/pause controls for each Ayah
- Beautiful Arabic typography and RTL layout
- Search functionality for Surahs and Ayahs
- Bookmark Ayahs for later reference
- Responsive design for all devices

**Real-time Prayer Times**
- Location-based prayer time calculation with automatic detection
- Displays all five daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha) with countdown
- Beautiful prayer time cards with custom imagery and themes
- Supports multiple calculation methods and adjustments

**Daily Azkar (Remembrances)**
- Comprehensive collection of Azkar for various occasions (Morning, Evening, Post-Prayer, Sleep, Wake-up)
- Interactive slider interface for easy browsing and tracking
- Arabic text with transliteration and translation options

**Hadith Explorer**
- Browse Hadith collections and books
- Read Hadith with Arabic text and translations
- Search and filter Hadith by keywords and narrators

**Digital Tasbih**
- Interactive digital Tasbih with customizable counters
- Presets for common glorifications (Subhanallah, Alhamdulillah, Allahu Akbar)
- Save and reset Tasbih counts

### Modern UI/UX
- Dark/Light theme toggle for personalized viewing
- Fully responsive design optimized for desktop, tablet, and mobile devices
- Smooth animations and transitions for a rich user experience
- Arabic RTL (Right-to-Left) layout support for a natural reading flow
- Custom CSS with modern styling and utilities

### Additional Features
- Geolocation services for accurate prayer times
- Audio integration for Quranic recitation
- Full-screen optimization message for better experience on smaller screens
- Robust loading states and error handling for a seamless user journey
- Cross-browser compatibility for wider accessibility
- User authentication and ayah marking functionality
- Educational content and resources

## Tech Stack

- **Frontend Framework:** React 19.1.0
- **Build Tool:** Vite 6.3.5
- **Icons:** Lucide React
- **Styling:** Modern CSS with CSS Modules and utility classes
- **APIs:** 
  - [Al Quran Cloud API](https://api.alquran.cloud/) - Quranic verses and audio
  - [Aladhan API](https://api.aladhan.com/) - Prayer times and astronomical data
  - [Azkar API (Nawaf Alqari)](https://github.com/nawafalqari/ayah) - Islamic remembrances
  - [Hadith API (Sunnah.com)](https://sunnah.com/api) - Hadith collection and books
- **Development Tools:** ESLint for code quality, Prettier for code formatting
- **Backend:** Node.js, Express.js, MongoDB, Mongoose, JWT, Bcrypt (as detailed in the Backend section)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher recommended)
- npm or yarn package manager
- MongoDB instance (local or cloud-hosted) for backend data storage

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/quran-kareem.git # Replace with your repo URL
   cd quran-kareem
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Configure environment variables**
   Create a `.env` file in both the `frontend` and `backend` directories. Refer to `.env.example` files (if available) for required variables.
   
   **frontend/.env** (Example)
   ```env
   VITE_APP_NAME="Quran Kareem"
   VITE_API_BASE_URL="http://localhost:5000/api"
   ```
   
   **backend/.env** (Example)
   ```env
   PORT=5000
   MONGO_URI="mongodb://localhost:27017/quran-kareem"
   JWT_SECRET="supersecretjwtkey"
   ```

5. **Start the development servers**
   Open two separate terminal windows.

   **Terminal 1 (Frontend):**
   ```bash
   cd frontend
   npm run dev
   ```

   **Terminal 2 (Backend):**
   ```bash
   cd backend
   npm start
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173` to view the frontend application.

### Build for Production

```bash
cd frontend
npm run build
```

The production build will be generated in the `frontend/dist` folder.

### Preview Production Build

```bash
cd frontend
npm run preview
```

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop** (1440px+): Full 4-column layout with enhanced spacing
- **Tablet** (1024px and below): 2-column grid layout
- **Mobile** (768px and below): Single column stack layout
- **Small Mobile** (480px and below): Optimized spacing and typography
- **Specific component adjustments for:** Hadith and Tasbih pages, Navbar, Quran cards, and Azkar categories.

## API Integration

- **User Authentication:** Handled by the custom Node.js/Express.js backend.
- **Quran Data:** Integrated with the [Al Quran Cloud API](https://api.alquran.cloud/) for comprehensive Quranic verses, translations, and high-quality audio recitations. The backend may also cache or proxy these requests.
- **Prayer Times:** Utilizes the [Aladhan API](https://api.aladhan.com/) to fetch accurate, location-based prayer times. The backend handles API requests and provides this data to the frontend.
- **Azkar:** Fetches daily Islamic remembrances from the [Azkar API (Nawaf Alqari)](https://github.com/nawafalqari/ayah). The backend integrates with this API.
- **Hadith:** Integrates with the [Sunnah.com API](https://sunnah.com/api) (or a similar Hadith API) to provide access to various Hadith collections and individual Hadith. The backend acts as an intermediary.

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory for any API keys or configuration:

```env
VITE_APP_NAME=Quran Kareem
VITE_API_BASE_URL=https://api.alquran.cloud
```

### Theme Customization

The application uses CSS custom properties for easy theme customization. Modify the variables in `src/index.css`:

```css
:root {
  --main-color: #3498db;
  --background-color: #ffffff;
  --text-color: #333333;
  --navbar-color: #f8f9fa;
  /* Add more custom properties */
}
```

---
## Backend

The backend for Quran Kareem is built with Node.js and Express.js, providing a robust API for user authentication, prayer times, Quranic data, Hadith, and Azkar.

### Technologies

- **Node.js**: Asynchronous event-driven JavaScript runtime
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js
- **JWT (JSON Web Tokens)**: For secure user authentication
- **Bcrypt**: For password hashing

### API Endpoints

- **Authentication**:
  - `POST /api/auth/register`: Register a new user
  - `POST /api/auth/login`: Authenticate user and get a token
  - `GET /api/auth/me`: Get current user's profile (protected)

- **Quran**:
  - `GET /api/quran/surahs`: Get all surahs
  - `GET /api/quran/surah/:number`: Get a specific surah
  - `GET /api/quran/ayah/:ayahId`: Get a specific ayah (verse)

- **Prayer Times**:
  - `GET /api/prayer/times`: Get prayer times for a given location

- **Hadith**:
  - `GET /api/hadith/collection`: Get Hadith collection
  - `GET /api/hadith/:bookSlug/:hadithNumber`: Get a specific Hadith

- **Azkar**:
  - `GET /api/azkar/category`: Get Azkar categories
  - `GET /api/azkar/:categorySlug`: Get Azkar by category

---
## 🤝 Contributing

We welcome contributions from the community! To contribute:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes.
4.  Commit your changes (`git commit -m 'feat: Add new feature'`).
5.  Push to the branch (`git push origin feature/your-feature-name`).
6.  Open a Pull Request.

Please ensure your code adheres to our coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- **Your Name/Organization** - [Your Website/Portfolio](https://cv-website-sandy.vercel.app/)
- Project Link: [https://github.com/Farah-Tarek101/Quraan](https://github.com/Farah-Tarek101/Quraan)

---
<div align="center">
  Developed with ❤️ by Farah Tarek
</div>

