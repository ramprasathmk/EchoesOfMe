import { Route, Routes, Navigate } from 'react-router-dom'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './components/pages/Home'
import Projects from './components/pages/Projects'
import About from './components/pages/About'
import Resume from './components/pages/Resume'
import Chat from './components/pages/Chat'

function App() {

  return (
    <>
      {/* Header */}
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App
