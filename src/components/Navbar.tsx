import React from "react";

function Navbar() {
  return (
    <div className="navbar w-full fixed top-0 z-50 mx-auto px-4 my-3  text-xs font-thin">
      <div className="mobile-navbar-header flex lg:hidden items-center justify-between border-b border-foreground pb-3 pt-1">
        <p>MENU</p>
        <div className="h-[8px] w-[8px] rounded-full bg-neutral-50 "></div>
      </div>
      <div className="nav-items hidden lg:grid grid-cols-4 gap-8">
        <div className="nav-item pb-3 border-b border-foreground flex items-center justify-between">
          <p>SHOP</p>
          <div className="h-[8px] w-[8px] rounded-full bg-neutral-50"></div>
        </div>
        <div className="nav-item pb-3 border-b border-foreground flex items-center justify-between">
          <p>COLLECTIONS</p>
          <div className="h-[8px] w-[8px] rounded-full bg-neutral-50"></div>
        </div>
        <div className="nav-item pb-3 border-b border-foreground flex items-center justify-between">
          <p>ACCOUNT</p>
          <div className="h-[8px] w-[8px] rounded-full bg-neutral-50"></div>
        </div>
        <div className="nav-item pb-3 border-b border-foreground flex items-center justify-between">
          <p>CART (0)</p>
          <div className="h-[8px] w-[8px] rounded-full bg-neutral-50"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
