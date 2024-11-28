// ProgressBar.js
import { useState, useEffect } from "react";
import "./ProgressBar.css"; // Create a CSS file for styling the progress bar

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the progress based on the scroll position
      const totalScrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolledPercentage = (window.scrollY / totalScrollHeight) * 100;
      setScrollProgress(scrolledPercentage);
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define colors for different topics
  const getColor = () => {
    if (scrollProgress < 40) {
      return "pink";
    } else if (scrollProgress < 75) {
      return "skyblue";
    } else {
      return "lightgreen";
    }
  };

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%`, backgroundColor: getColor() }}
      ></div>
    </div>
  );
};

export default ProgressBar;
