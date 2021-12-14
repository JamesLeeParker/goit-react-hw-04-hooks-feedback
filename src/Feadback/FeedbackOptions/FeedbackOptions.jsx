const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <button type="button" onClick={options}>
        {onLeaveFeedback}
      </button>
    </>
  );
};

export default FeedbackOptions;
