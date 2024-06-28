const History = (props) => {
  //Ehdollinen renderöinti
  if (props.allClicks.length === 0) {
    return (
      <div className="button-container">
        The app is used by pressing the buttons
      </div>
    );
  }
  return <div>Button press history: {props.allClicks.join(" ")}</div>;
};
export default History;
