import { useState, useEffect } from "react";
import { Element, scroller } from "react-scroll";

// eslint-disable-next-line react/prop-types
const NumberCounter = ({ maxNumber }) => {
  const [count, setCount] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const scrollOffset = 300; // Adjust this value for your needs

      if (currentScrollY >= windowHeight - scrollOffset) {
        setIsCounting(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        setCount((prevCount) =>
          prevCount < maxNumber ? prevCount + 1 : maxNumber
        );
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isCounting, maxNumber]);

  // Scroll to the counter section when isCounting becomes true
  useEffect(() => {
    if (isCounting) {
      scroller.scrollTo("number-counter", {
        smooth: true,
        duration: 500,
      });
    }
  }, [isCounting]);

  return (
    <div>
      <Element name="number-counter">
        <div>
          <h1 className="font-bold text-xl">{count}</h1>
        </div>
      </Element>
    </div>
  );
};

export default NumberCounter;
