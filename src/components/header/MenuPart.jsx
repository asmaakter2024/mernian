import React from "react";
import BarIcon from "../../svgIcons/BarIcon";
import DotIcon from "../../svgIcons/DotIcon";

const MenuPart = () => {
  return (
    <div className="flex items-center gap-12">
      <div>
        <BarIcon />
      </div>
      <div>
        <ul className="flex items-center gap-12">
          <li>Carrers</li>
          <li>Store</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div>
        <DotIcon />
      </div>
    </div>
  );
};

export default MenuPart;
