import React from "react";

const handleRemoveClick = (index, func) => {
  return e => {
    e.preventDefault();
    func(index);
  };
};

const PlayerListItem = ({index, player, removePlayer}) => (
    <li className="row">
      <div className="col-sm-8">
        {player.name}
        <br/>
        points: {player.points}
      </div>

      <div className="col-sm-4">
        <button
          className="btn btn-danger btn-sm"
          onClick={handleRemoveClick(index, removePlayer)}>
          X
        </button>
      </div>
    </li>
);

export default PlayerListItem;
