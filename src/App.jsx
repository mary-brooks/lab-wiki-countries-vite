import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CountryDetailsPage from './pages/CountryDetailsPage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/countries/:alpha3Code' element={<CountryDetailsPage />} />
      </Routes>
      {/* <CountryDetailsPage /> */}
    </div>
  );
}

export default App;
