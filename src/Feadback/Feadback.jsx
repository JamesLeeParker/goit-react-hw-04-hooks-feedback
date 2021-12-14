import { useState } from "react";

import Statistic from "./Statistic/Statistic";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Notifaction from "./Notifaction/Notifaction";

const Feadback = ({ goodBase, neutralBase, badBase }) => {
  console.log(goodBase);
  const [good, setGood] = useState(goodBase);
  const [neutral, setNeutral] = useState(neutralBase);
  const [bad, setBad] = useState(badBase);

  const increaseFeedback = () => {
    setGood(good + 1);
  };

  const degreaseFeedback = () => {
    setBad(bad + 1);
  };

  const neutralFeedback = () => {
    setNeutral(neutral + 1);
  };

  const countTotalFeedback = () => good + bad + neutral;

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((100 / countTotalFeedback()) * good);
  };

  const renderStatistics = (
    <Statistic
      goodValue={good}
      badValue={bad}
      neutralValue={neutral}
      counterFeedback={countTotalFeedback()}
      cpountPosFeedback={countPositiveFeedbackPercentage()}
    />
  );

  return (
    <>
      <Section title="Please leave feadback">
        <FeedbackOptions options={increaseFeedback} onLeaveFeedback={"Good"} />
        <FeedbackOptions
          options={neutralFeedback}
          onLeaveFeedback={"Neutral"}
        />
        <FeedbackOptions options={degreaseFeedback} onLeaveFeedback={"Bad"} />
      </Section>
      <Section title="Statistic">
        {good >= 1 ? renderStatistics : <Notifaction />}
      </Section>
    </>
  );
};

export default Feadback;
