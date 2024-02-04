import './App.css';
import { Route, Routes } from 'react-router-dom'; 
import Dashboard from "./pages/Dashboard";   
import Header from "./components/navbar/Header";
import Footer from './components/navbar/Footer';

function App() { 
  return (
    <>
    <Header/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    <Footer/>
    </>
  );
}

export default App;
