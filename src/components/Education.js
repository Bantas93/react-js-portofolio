import { NavLink, Outlet } from "react-router-dom";

const Education = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "white" : "black",
      textDecoration: isActive ? "none" : "none",
      opacity: isActive ? "90%" : "75%",
      fontWeight: isActive ? "bold" : "",
      backgroundColor: isActive ? "#212529" : "",
      borderRadius: isActive ? "5%" : "",
    };
  };
  return (
    <>
      <div className="bg-Education text-center pt-5">
        <h1>Education</h1>
        <NavLink
          to="/Education/NonFormal"
          className="m-2 p-1 hov-e"
          style={navLinkStyles}
        >
          nonFormal
        </NavLink>
        <NavLink
          to="/Education/Formal"
          className="m-2 p-1 hov-e"
          style={navLinkStyles}
        >
          Formal
        </NavLink>
        <Outlet />

        {/* <h1 className="mb-5">Error 404</h1>
      <div class="alert alert-danger" role="alert">
        <h4 class="alert-heading text-center">Peringatan!</h4>
        <br></br>
        <p>
          Konten ini sedang dalam Proses Pembuatan, dan sedang dipelajari
          bagaimana menyusun komponen dan elemen agar terlihat lebih rapih
        </p>
        <p class="mb-0">
          Belum diketahui kapan akan tayang konten di halaman ini. Harap
          bersabar.
        </p>
        <br></br>
        <h6>Terima Kasih</h6>
      </div> */}
      </div>
    </>
  );
};

export default Education;
