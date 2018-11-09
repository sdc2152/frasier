import React from "react";
import {MAX_POINTS} from "../../actions/gameActions";

const WinningPoints = ({winningPoints, receiveWinningPoints}) => {
  const numsOptions = Array.from(new Array(MAX_POINTS), (val, index) => (
    <option key={index}>{index+1}</option>
  ));
  return (
    <div className="form-group row">
      <label htmlFor="inputWinningPoints"
        className="col-sm-6 col-form-label">
        Winning Points
      </label>
      <div className="col-sm-6">
        <select className="form-control" id="inputWinningPoints"
          title="winning points" defaultValue={winningPoints}
          onChange={(e) => {e.preventDefault(); receiveWinningPoints(Number(e.target.value));}}
        >
          {numsOptions}
        </select>
      </div>
    </div>
  );
};

export default WinningPoints;
