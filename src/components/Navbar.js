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
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <NavLink style={navLinkStyles} to="#" className="navbar-brand">
          Bantas
        </NavLink>
        <button
          class="navbar-toggler navbar-dark"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
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
          </div>
        </div>
      </div>
    </nav>
    // <nav className="d-flex justify-content-center">
    //   <NavLink style={navLinkStyles} to="/" className="m-2 p-1">
    //     Home
    //   </NavLink>
    //   <NavLink style={navLinkStyles} to="About" className="m-2 p-1">
    //     About
    //   </NavLink>
    //   <NavLink style={navLinkStyles} to="/Experience" className="m-2 p-1">
    //     Experience
    //   </NavLink>
    //   <NavLink style={navLinkStyles} to="/Contact" className="m-2 p-1">
    //     Contact
    //   </NavLink>
    // </nav>
  );
};
export default Navbar;
