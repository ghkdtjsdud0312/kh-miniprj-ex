import { Outlet } from "react-router-dom";
import logoWhite from "../images/tier_logo_white.png";
import alarm from "../images/bell.png";
import Container from "./Container";

const Layout = () => {
  return (
    <Container>
      <header className="mainhead">
        <div className="logo2">
          <img src={logoWhite} alt="white" />
        </div>
        <div className="bell">
          <img src={alarm} alt="alarm" />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default Layout;
