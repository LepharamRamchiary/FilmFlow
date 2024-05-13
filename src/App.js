import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Feed from "./components/Feed";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Feed />
    </BrowserRouter>
  );
}

export default App;
