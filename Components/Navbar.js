import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Link from "next/link";
import Image from "react-bootstrap/Image";
import { RiAccountCircleFill } from "react-icons/ri";

export default function Navbar() {
  const openCloseMenu = () => {
    var x = document.getElementById("_nav-div");
    if (x.className === "nav-div") {
      x.className += " responsive";
    } else {
      x.className = "nav-div";
    }
  };

  return (
    <>
      <div className="nav-div" id="_nav-div">
        <ul id="nav-list">
          <li>
            <Link href="/">
              <a>
                <Image
                  id="logo"
                  className="navbar-brand"
                  src={"/images/home/logo.png"}
                  alt="SayabiDevs Logo"
                />
              </a>
            </Link>
          </li>

          <li>
            <Link href="/">
              <a>
                <Button variant="contained">Home</Button>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/services">
              <a>
                <Button variant="contained">Services</Button>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/career">
              <a>
                <Button variant="contained">Career</Button>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <a className="mb-4">
                <Button variant="contained">Contact</Button>
              </a>
            </Link>
          </li>

          <li>
            <Link href="/login">
              <a className="mb-4">
                <Button variant="contained">Login</Button>
              </a>
            </Link>
          </li>

          <li style={{position: "relative", top: "8px"}}>
            <Link href="/dashboard">
                <button className="buttonEffects h4">
                  <RiAccountCircleFill />
                </button>
            </Link>
          </li>

          <li>
            <a className="menu-icon" onClick={openCloseMenu}>
              <MenuRoundedIcon style={{ color: "#E71B1E" }} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
