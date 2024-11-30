import { useState, useEffect } from "react";
import "./App.css";
import Description from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
  const FEEDBACK_KEY = "feedback";
  const initFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem(FEEDBACK_KEY);
    return savedFeedback ? JSON.parse(savedFeedback) : initFeedback;
  });

  useEffect(() => {
    window.localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((feedback) => ({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback(initFeedback);
  };

  const totalFeedback = Object.values(feedback).reduce((a, b) => a + b, 0);
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification>No feedback yet</Notification>
      )}
    </>
  );
}

export default App;
