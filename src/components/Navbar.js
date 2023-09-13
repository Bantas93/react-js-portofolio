import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "white" : "white",
      textDecoration: isActive ? "none" : "",
      opacity: isActive ? "85%" : "50%",
    };
  };
  return (
    <nav className="d-flex justify-content-center">
      <NavLink style={navLinkStyles} to="/" className="m-2 p-1">
        Home
      </NavLink>
      <NavLink style={navLinkStyles} to="About" className="m-2 p-1">
        About
      </NavLink>
      <NavLink style={navLinkStyles} to="/Experience" className="m-2 p-1">
        Experience
      </NavLink>
      <NavLink style={navLinkStyles} to="/Contact" className="m-2 p-1">
        Contact
      </NavLink>
    </nav>
  );
};
export default Navbar;
