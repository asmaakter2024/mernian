import React from "react";
import LogoPart from "./LogoPart";
import MenuPart from "./MenuPart";
import SearchPart from "./SearchPart";

const Header = () => {
  return (
    <div className="flex bg-[#615DFA]">
      <div>
        <LogoPart />
      </div>
      <div>
        <MenuPart/>
      </div>
      <div>
        <SearchPart/>
      </div>

    </div>
  );
};

export default Header;
