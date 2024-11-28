import { useState, useEffect } from "react";

// eslint-disable-next-line react/prop-types
const DateCalculator = ({ inputDate }) => {
  const [daysPassed, setDaysPassed] = useState(0);

  useEffect(() => {
    calculateDaysPassed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputDate]);

  const calculateDaysPassed = () => {
    const inputTimestamp = new Date(inputDate).getTime();
    const todayTimestamp = new Date().getTime();
    const timeDifference = todayTimestamp - inputTimestamp;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    setDaysPassed(daysDifference);
  };

  return (
    <div>
      <h4>{daysPassed} days ago</h4>
    </div>
  );
};

export default DateCalculator;
