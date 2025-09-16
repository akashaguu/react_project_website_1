
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home'
import About from './Pages/About';
import Contact from './Pages/Contact';
import Work from './Pages/Work'
import Header from './component/Header/Header';

function App() {
  return (
     <>
     <BrowserRouter>
      <Header />
     <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/work' element={<Work />}></Route>
      <Route path='/contact' element={<Contact />}></Route>

     </Routes>
     
     
     
     </BrowserRouter>
    
    </>
  );
}

export default App;
