const Statistic = ({
  goodValue,
  badValue,
  neutralValue,
  counterFeedback,
  cpountPosFeedback,
}) => {
  return (
    <>
      <div>Good: {goodValue}</div>
      <div>Neutral: {neutralValue}</div>
      <div>Bad: {badValue}</div>
      <div>Total: {counterFeedback}</div>
      <div>Positive feedback: {cpountPosFeedback}%</div>
    </>
  );
};

export default Statistic;
