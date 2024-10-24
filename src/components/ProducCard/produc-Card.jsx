import React from "react";

export const ProducCard = ({img, title}) => {
  return <div>
      <div>
        <img src={img} alt="img" />
        <h3>{title}</h3>
      </div>
  </div>;
};
