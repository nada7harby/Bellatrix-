import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Implementation from './components/Services/implementation';
import Training from './components/Services/training';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/Home" element={<LandingPage />} />
      <Route path="/Implementation" element={<Implementation />} />
      <Route path="/Training" element={<Training />} />
    </Routes>
  );
}

export default App;
