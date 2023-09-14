import { NavLink, Outlet } from "react-router-dom";

const Experience = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "black" : "black",
      textDecoration: isActive ? "none" : "none",
      opacity: isActive ? "100%" : "75%",
      fontWeight: isActive ? "bold" : "",
    };
  };
  return (
    <>
      <div className="bg-Experience text-center pt-5">
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

export default Experience;
