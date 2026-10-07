import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Nav from './components/Nav';
import Contact from './components/Contact';
import Home from './pages/Home';
import ProjectPage from './pages/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Contact />
      </div>
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
