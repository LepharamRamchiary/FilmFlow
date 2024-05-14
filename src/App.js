import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Feed from "./components/Feed";
import Details from './components/Details';
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video' element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
