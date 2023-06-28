import React from "react";

const Operation = ({ handleClick, type, className }) => {
  return (
    <div className={className} onClick={handleClick}>
      {type}
    </div>
  );
};

export default Operation;