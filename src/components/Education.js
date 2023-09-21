import { NavLink, Outlet } from "react-router-dom";

const Education = () => {
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
      <div className="bg-Education text-center pt-5 text-white-50">
        <h1>Education</h1>
        {/* <NavLink
          to="/Education/NonFormal"
          className="m-2 p-1 hov-e"
          style={navLinkStyles}
        >
          nonFormal
        </NavLink> */}
        <NavLink
          to="/Education/Formal"
          className="m-2 p-1 hov-e"
          style={navLinkStyles}
        >
          Formal
        </NavLink>
        <Outlet />
      </div>
    </>
  );
};

export default Education;
