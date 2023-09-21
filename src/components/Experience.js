import { NavLink, Outlet } from "react-router-dom";

const Experience = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "black" : "white",
      textDecoration: isActive ? "none" : "none",
      opacity: isActive ? "90%" : "50%",
      fontWeight: isActive ? "bold" : "",
      backgroundColor: isActive ? "#a6aab7" : "",
      borderRadius: isActive ? "5%" : "",
    };
  };
  return (
    <>
      <div className="bg-Experience text-center pt-5  text-white-50">
        <h1>Experience</h1>
        <NavLink
          to="/Experience/NonProgram"
          className="m-2 p-1 hov-e"
          style={navLinkStyles}
        >
          nonProgram
        </NavLink>
        <NavLink
          to="/Experience/Program"
          className="m-2 p-1 hov-e"
          style={navLinkStyles}
        >
          Program
        </NavLink>
        <Outlet />
      </div>
    </>
  );
};

export default Experience;
