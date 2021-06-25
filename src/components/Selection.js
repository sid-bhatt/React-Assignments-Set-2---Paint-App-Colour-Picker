import React, { useState } from "react";

const Selection = (props) => {
  const { applyColor } = props;
  const [selectStyle, updateSelectStyle] = useState({ background: "" });
  return (
    <div
      className="box"
      style={selectStyle}
      onClick={() => {
        applyColor(updateSelectStyle);
      }}
    >
      <h3>Selection Page</h3>
    </div>
  );
};

export default Selection;
