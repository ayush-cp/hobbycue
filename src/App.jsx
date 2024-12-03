import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Footer from './Components/footer';
import Navbar from './Components/navbar';
import AddNew from './Components/AddNew';

function App() {
  return (
    <div className='w-full min-h-screen h-max bg-white-400'>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addNew" element={<AddNew />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;