import { Button } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';

const Question1: React.FC = () => {
  const [count, setCount] = useState(0);
  let timeId = useRef<any>(null);

  useEffect(() => {
    return () => {
      clearInterval(timeId.current);
    };
  }, []);
  const startHandler = () => {
    if (!timeId.current) {
      timeId.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
  };
  const stopHandler = () => {
    if (timeId.current) {
      clearInterval(timeId.current);
      timeId.current = null;
    }
  };
  const resetHandler = () => {
    stopHandler();
    setCount(0);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <p
          style={{
            fontSize: '32px',
            color: 'blue',
            fontWeight: '600'
          }}
        >
          {count}
        </p>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Button variant="contained" onClick={startHandler}>
            Start
          </Button>
          <Button variant="contained" onClick={stopHandler}>
            Stop
          </Button>
          <Button variant="contained" onClick={resetHandler}>
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};

export default Question1;
