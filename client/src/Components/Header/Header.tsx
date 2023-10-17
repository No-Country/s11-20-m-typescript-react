import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link to="/" color="foreground" className='flex flex-row-reverse text-teal-800 hover:underline' style={{userSelect: "none",}}>Earth Points - Header</Link>
      </NavbarBrand>
      <NavbarContent justify="end">

        <NavbarItem>
          <Link to="/auth" color="foreground" className='flex flex-row-reverse text-teal-800 hover:underline' style={{userSelect: "none",}}>Auth</Link>
        </NavbarItem>

      </NavbarContent>
    </Navbar>
  );
}