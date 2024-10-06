// src/components/ScrollToTopButton.jsx
import  { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false); //determine whether the button should be visible based on the scroll position.

  //This function checks the current vertical scroll position
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
//This function uses window.scrollTo() to scroll smoothly to the top of the page when called.
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);//whenever the user scrolls. The return statement cleans up the event listener when the component unmounts or re-renders.

  return (
    <div className="fixed bottom-4 right-4">
      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="bg-gradient-to-b from-green-700 to-green-900 text-white rounded-full p-2 shadow-lg hover:bg-green-600 transition duration-300"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;