import React from "react";

const PlayerDisplayListItem = ({player}) => (
    <li className="row mb-2">
      <div className="col-sm-8">
        {player.name}
        <br/>
        points: {player.points}
      </div>
    </li>
);

export default PlayerDisplayListItem;
