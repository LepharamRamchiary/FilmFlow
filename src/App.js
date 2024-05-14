import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Feed from "./components/Feed";
import Details from './components/Details';
import Footer from "./components/Footer";

import { AppContext } from './context/contextApi';

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' exact element={<Feed />} />
          <Route path='/video' element={<Details />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AppContext>
  );
}

export default App;
