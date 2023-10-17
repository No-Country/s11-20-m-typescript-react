import {Navbar, NavbarBrand,} from "@nextui-org/react";
import { Link } from "react-router-dom";

export default function Footer () {
  return (
    <Navbar isBordered>
      <NavbarBrand>
        <Link to="/" color="foreground" className='flex flex-row-reverse text-teal-800 hover:underline' style={{userSelect: "none",}}>Earth Points - Header</Link>
      </NavbarBrand>
    </Navbar>
  );
}