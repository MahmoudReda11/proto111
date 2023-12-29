import ParticleBackground from './components/Particle';
import Navbar from './components/Navbar';
import StartSection from './components/StartSection';
import About from './components/About';
import Work from './components/Work';

function App() {
  return (
    <div className=' fixed top-0 left-0 right-0 overflow-y-scroll bottom-0'>
      <div className='h-[200vh]'>
      <Navbar />
      <StartSection />
      <About />
      <Work />
      <ParticleBackground/>
      </div>
    
    
    </div>
  )
}

export default App
