import { useState, useEffect } from 'react';

const RunningDistanceSimulator = () => {
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update distance every second (you can adjust the interval)
      setDistance((prevDistance) => prevDistance + 1);
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>Football Player Running Distance</h2>
      <p>Distance: {distance} meters</p>
    </div>
  );
};

export default RunningDistanceSimulator;
