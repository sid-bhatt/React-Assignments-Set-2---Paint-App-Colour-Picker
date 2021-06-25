import React, { useState } from "react";

const Selection = (props) => {
  const { applyColor } = props;
  const [selectionStyle, updateSelectionStyle] = useState({ background: "" });
  return (
    <div
      className="box"
      style={selectionStyle}
      onClick={() => {
        applyColor(updateSelectionStyle);
      }}
    >
      <h3>Selection Page</h3>
    </div>
  );
};

export default Selection;
