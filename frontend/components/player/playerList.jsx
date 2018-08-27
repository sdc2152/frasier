import React from "react";

const PlayerList = ({players}) => {
  const playersList = players.map((c, i) => (
    <li className="row" value={i} key={i}>
      <div className="col-lg-12">
        name: {c.name}
      </div>
      <div className="col-lg-12">
        points: {c.points}
      </div>
    </li>
  ));
  return (
    <ul className="container">
      {playersList}
    </ul>
  );
};

export default PlayerList;
