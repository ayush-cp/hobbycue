import Home from './Components/Home'
import Footer from './Components/footer';
import Navbar from './Components/navbar';
import AddYourOwnSection from './Components/AddYourOwn';
import TestimonialSection from './Components/testimonials';
function App() {
  return (
    <div className='w-full min-h-screen h-max bg-white-400'>
      <Navbar />
      <Home />
      <AddYourOwnSection />
      <TestimonialSection />
      <Footer />
    </div>
  )
}

export default App;