import { Link, useLocation } from "react-router-dom";

import "../styles/Header.css";

const HeaderLink = ({ page, selected }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);

  return (
    <Link to={`/${page}`} className="headerlink-title">
      <div className={selected ? "headerlink-title-selected" : ""}>{title}</div>
    </Link>
  );
};

const Header = () => {
  const { pathname } = useLocation();

  return (
    <div className="Header">
      <span className="header-title">Budget Buddy</span>
      <HeaderLink page="home" selected={pathname === "/home" | pathname ==="/"} />
      <HeaderLink page="analysis" selected={pathname === "/analysis"} />
      <HeaderLink page="input" selected={pathname === "/input"} />
    </div>
  );
};

export default Header;
