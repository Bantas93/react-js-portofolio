// import { Link } from "react-router-dom";
// import satu from "../assets/img/projects (1).jpg";
// import dua from "../assets/img/projects (2).jpg";
// import tiga from "../assets/img/projects (3).jpg";
// import empat from "../assets/img/projects (4).jpg";
// import lima from "../assets/img/projects (5).jpg";

const NonProgram = () => {
  return (
    <div className="container p-3 mt-3 bg-nonprogram">
      <div className="row d-flex justify-content-center">
        <div className="col-md-5 ">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Editor & Fotografer
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <strong>PT. Citra Kreativa Inovasi</strong>
                  <br />
                  <strong>November 2013 - Agustus 2021</strong>
                  <br />
                  Outlet
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Sales Assistant (S.A.)
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <strong>PT. DC Comics Superheroes Indonesia</strong>
                  <br />
                  <strong>Januari 2012 - November 2013</strong>
                  <br />
                  Showroom
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Sales Promotion Boy (SPB)
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <strong>PT. Matahari Tbk.</strong>
                  <br />
                  <strong>Juli 2011 - Januari 2012</strong>
                  <br />
                  Dept. Store
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NonProgram;
