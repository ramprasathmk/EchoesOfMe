import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import About from './components/pages/About'
import { HelloWorld } from './components'


function App() {
  return (
    <>
      {/* Header */}
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/helloworld" element={<HelloWorld />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App