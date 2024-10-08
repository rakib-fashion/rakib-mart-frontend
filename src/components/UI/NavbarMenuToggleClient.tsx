"use client"; // This ensures this file is treated as a client-side component

import { useState } from "react";
import { NavbarMenuToggle } from "@nextui-org/navbar";

const NavbarMenuToggleClient = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarMenuToggle
      isOpen={isMenuOpen}
      onClick={handleMenuToggle}
      data-open={isMenuOpen ? "true" : "false"}
    />
  );
};

export default NavbarMenuToggleClient;
