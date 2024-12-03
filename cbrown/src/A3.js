import React, { useEffect, useState } from "react";
import "./A3.css";

function A3() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // Calculate remaining time
  function calculateTimeLeft() {
    const targetDate = new Date("2024-12-06T00:00:00"); // Target date
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null; // Countdown finished
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  // Timer logic with effect hook
  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      if (!newTimeLeft) {
        clearInterval(timer);
        setIsVisible(true); // Show content once time is up
      } else {
        setTimeLeft(newTimeLeft); // Update the countdown
      }
    }, 1000);

    // Cleanup the timer on unmount
    return () => clearInterval(timer);
  }, []);

  // If content is not yet visible, show countdown
  if (!isVisible) {
    return (
      <div className="countdown-container">
        <h1>This will be visible on 06/12/2024.</h1>
        {timeLeft && (
          <p>
            {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m :{" "}
            {timeLeft.seconds}s
          </p>
        )}
      </div>
    );
  }

  // Content to show after the countdown
  return (
    <div className="content-container">
      <h1 className="assignment-title">A3 Assignment Page</h1>
      <div className="pdf-container">
        <iframe
          src="../a3-report.pdf"
          title="Report PDF"
          className="pdf-viewer"
        ></iframe>
        <iframe
          src="../a3-presentation.pdf"
          title="Slides PDF"
          className="pdf-viewer"
        ></iframe>
      </div>
      <button className="youtube-button">
        <a
          href="https://youtu.be/klEbpnNFlnA"
          target="_blank"
          rel="noopener noreferrer"
        >
          Watch Our Presentation
        </a>
      </button>
    </div>
  );
}

export default A3;
