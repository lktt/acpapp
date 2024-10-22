const UpcomingCheckInsCheckOuts = ({ checkIns, checkOuts }) => {
    return (
      <div>
        <h2>Upcoming Check-ins & Check-outs</h2>
        <p>Check-ins today: {checkIns}</p>
        <p>Check-outs today: {checkOuts}</p>
      </div>
    );
  };
  
  export default UpcomingCheckInsCheckOuts;
  