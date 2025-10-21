import logo from './logo.svg';
import './App.css';
import { Route, Router, Routes } from 'react-router';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>


    </div>
  );
}

export default App;
