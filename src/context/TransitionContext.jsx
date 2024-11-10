import { createContext, useContext, useState } from 'react';
import { motion } from 'framer-motion';

const TransitionContext = createContext();

export const TransitionProvider = ({ children }) => {
  const [transition, setTransition] = useState({
    direction: 'forward',
    duration: 0.5
  });

  const pageTransitions = {
    initial: (direction) => ({
      opacity: 0,
      y: direction === 'forward' ? 20 : -20,
      scale: 0.98
    }),
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.6,
        bounce: 0.1,
        damping: 20,
        stiffness: 100,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    },
    exit: (direction) => ({
      opacity: 0,
      y: direction === 'forward' ? -20 : 20,
      scale: 0.98,
      transition: {
        type: "spring",
        duration: 0.4,
        bounce: 0,
        damping: 25
      }
    })
  };

  const value = {
    transition,
    setTransition,
    pageTransitions
  };

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }
  return context;
};

// Higher-order component for page transitions
export const withPageTransition = (WrappedComponent) => {
  return function WithPageTransition(props) {
    const { pageTransitions, transition } = useTransition();
    
    return (
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransitions}
        custom={transition.direction}
        className="w-full min-h-screen"
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };
}

