import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Feed from "./components/Feed";
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact element={<Feed />} />
        <Route path='/video' element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
