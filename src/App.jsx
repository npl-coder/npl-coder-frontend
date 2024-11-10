import { Box, ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { TransitionProvider, useTransition } from './context/TransitionContext';
import HomePage from './Pages/HomePage';
import GalleryPage from './Pages/GalleryPage';
import UpcomingEventsPage from './Pages/UpcommingEventsPage';

const App = () => {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <TransitionProvider>
          <Box>
            <AnimatedRoutes />
          </Box>
        </TransitionProvider>
      </BrowserRouter>
    </ChakraProvider>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();
  const { setTransition } = useTransition();
  const navigate = useNavigate();

  // Updated transition direction based on navigation
  const handleNavigation = (path) => {
    const currentPath = location.pathname;
    const paths = ['/', '/gallery', '/upcommingevents'];
    const currentIndex = paths.indexOf(currentPath);
    const targetIndex = paths.indexOf(path);
    
    setTransition({
      direction: targetIndex > currentIndex ? 'forward' : 'backward',
      duration: 0.5
    });
    
    navigate(path);
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage onNavigate={handleNavigation} />} />
        <Route path="/gallery" element={<GalleryPage onNavigate={handleNavigation} />} />
        <Route path="/upcommingevents" element={<UpcomingEventsPage onNavigate={handleNavigation} />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;