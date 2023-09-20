// components/InfiniteScroll.js
import React, { useEffect } from 'react';

const InfiniteScroll = ({ onScrollEnd }) => {
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.offsetHeight
      ) {
        onScrollEnd();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onScrollEnd]);

  return null;
};

export default InfiniteScroll;
