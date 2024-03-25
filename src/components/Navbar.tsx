import React from "react";

function Navbar() {
  return (
    <div className="navbar w-full  grid grid-cols-4 fixed top-0 z-50 mx-auto px-4 my-2 gap-8 text-xs font-thin">
      <div className="nav-item pb-2 border-b border-foreground flex items-center justify-between">
        <p>SHOP</p>
        <div className="h-[8px] w-[8px] rounded-full bg-neutral-50"></div>
      </div>
      <div className="nav-item pb-2 border-b border-foreground flex items-center justify-between">
        <p>COLLECTIONS</p>
        <div className="h-[8px] w-[8px] rounded-full bg-neutral-50"></div>
      </div>
      <div className="nav-item pb-2 border-b border-foreground flex items-center justify-between">
        <p>ACCOUNT</p>
        <div className="h-[8px] w-[8px] rounded-full bg-neutral-50"></div>
      </div>
      <div className="nav-item pb-2 border-b border-foreground flex items-center justify-between">
        <p>CART (0)</p>
        <div className="h-[8px] w-[8px] rounded-full bg-neutral-50"></div>
      </div>
    </div>
  );
}

export default Navbar;
