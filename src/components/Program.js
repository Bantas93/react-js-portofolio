import { Link } from "react-router-dom";
import satu from "../assets/img/app.jpg";
import dua from "../assets/img/app1.jpg";
import tiga from "../assets/img/app2.jpg";
// import empat from "../assets/img/projects (4).jpg";
// import lima from "../assets/img/projects (5).jpg";
import react_icon from "../assets/img/react_icon.png";
import js_icon from "../assets/img/js_icon.png";
import html_icon from "../assets/img/html_icon.png";
import css_icon from "../assets/img/css_icon.png";
import bootstrap_icon from "../assets/img/bootstrap_icon.png";

const Program = () => {
  return (
    <div className="container-row d-flex justify-content-center align-items-around p-3 mt-3 ">
      <div className="container-fluid row justify-content-center m-2">
        <div className="col-md-3 p-2 d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <img src={satu} class="card-img-top" alt="xxx" />
            <div class="card-body">
              <h5 class="card-title">App Exercise</h5>
              <p class="card-text">
                Aplikasi ini berisi kumpulan latihan saya belajar React Js.
              </p>
              <br />
              <img
                src={js_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <img
                src={react_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <img
                src={html_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <br />

              <Link
                to="https://exercise-tau.vercel.app/"
                target="blank"
                class="btn btn-secondary"
              >
                Visit !
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-2 d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <img src={dua} class="card-img-top" alt="xxx" />
            <div class="card-body">
              <h5 class="card-title">Portfolio V.0</h5>
              <p class="card-text">
                Saya membuat aplikasi Portfolio Static 1 Halaman.
              </p>
              <br />
              <img
                src={css_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <img
                src={html_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <img
                src={bootstrap_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <br />

              <Link
                to="https://portofolio-git-master-bantas93.vercel.app/"
                class="btn btn-secondary"
                target="blank"
              >
                Visit !
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-2 d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <img src={tiga} class="card-img-top" alt="xxx" />
            <div class="card-body">
              <h5 class="card-title">App Booking</h5>
              <p class="card-text">
                Saya membuat Aplikasi Booking Studio Foto Static Tanpa Database.
              </p>
              <br />
              <img
                src={react_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <img
                src={html_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <img
                src={js_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <br />
              <Link
                to="https://app-booking-git-master-bantas93.vercel.app/AppBooking"
                class="btn btn-secondary"
                target="blank"
              >
                Visit !
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-2 d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <img src={dua} class="card-img-top" alt="xxx" />
            <div class="card-body">
              <h5 class="card-title">Portfolio V.0</h5>
              <p class="card-text">
                Saya membuat aplikasi Portfolio Static 1 Halaman.
              </p>
              <br />
              <img
                src={css_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <img
                src={html_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <img
                src={bootstrap_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <br />

              <Link
                to="https://portofolio-git-master-bantas93.vercel.app/"
                class="btn btn-secondary"
                target="blank"
              >
                Visit !
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-2 d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <img src={tiga} class="card-img-top" alt="xxx" />
            <div class="card-body">
              <h5 class="card-title">App Booking</h5>
              <p class="card-text">
                Saya membuat Aplikasi Booking Studio Foto Static Tanpa Database.
              </p>
              <br />
              <img
                src={react_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <img
                src={html_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <img
                src={js_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <br />
              <Link
                to="https://app-booking-git-master-bantas93.vercel.app/AppBooking"
                class="btn btn-secondary"
                target="blank"
              >
                Visit !
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-2 d-flex justify-content-center">
          <div class="card" style={{ width: "18rem" }}>
            <img src={satu} class="card-img-top" alt="xxx" />
            <div class="card-body">
              <h5 class="card-title">App Exercise</h5>
              <p class="card-text">
                Aplikasi ini berisi kumpulan latihan saya belajar React Js.
              </p>
              <br />
              <img
                src={js_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <img
                src={react_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <img
                src={html_icon}
                class="card-img-top mb-3"
                alt="xxx"
                style={{ height: "30px", width: "30px" }}
              />
              <br />

              <Link
                to="https://exercise-tau.vercel.app/"
                target="blank"
                class="btn btn-secondary"
              >
                Visit !
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
