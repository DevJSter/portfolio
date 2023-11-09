import React, { useEffect, useState } from 'react';
import './Cursor.css';
import { motion } from 'framer-motion';

const Cursor = ({ scaling }) => {
  const [outerCircle, setOuterCircle] = useState({ x: -45, y: -45 });
  const [innerCircle, setInnerCircle] = useState({ x: -45, y: -45 });

  useEffect(() => {
    const mousemove = (e) => {
      setOuterCircle({ x: e.clientX, y: e.clientY });
      setInnerCircle({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', mousemove);

    return () => {
      window.removeEventListener('mousemove', mousemove);
    };
  }, []);

  return (
    <div className='hidden bg-transparent md:flex absolute items-center justify-center'>
      {/* <motion.div
        animate={{
          x: innerCircle.x,
          y: innerCircle.y,
          transition: { type: 'spring', stiffness: 1000000, mass: 0.01 },
        }}
        className='outer_circle'
      ></motion.div> */}
      <motion.div
        animate={{
          x: outerCircle.x,
          y: outerCircle.y,
          transition: { type: 'spring', stiffness: 1000, mass: 0.01 },
        }}
        className='inner_circle absolute'
        style={{ scale: scaling ? 0.1 : 1 }}
      ></motion.div>
    </div>
  );
};

export default Cursor;
