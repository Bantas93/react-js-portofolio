const Formal = () => {
  return (
    <div className="container-fluid p-3 mt-3 bg-nonformal">
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
                  UNIVERSITAS BINA SARANA INFORMATIKA{" "}
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <strong>2021 - Masih Aktif</strong>
                  <br />
                  <strong>CILEDUG, JAKARTA SELATAN</strong>
                  <br />
                  <strong>INFORMASI TEKNOLOGI DAN INFORMATIKA</strong>
                  <br />
                  Jurusan : <strong>SISTEM INFORMASI</strong>
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
                  SMA PGRI 117 KARANG TENGAH
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <strong>2008 - 2011</strong>
                  <br />
                  <strong>CILEDUG, KOTA TANGERANG</strong>
                  <br />
                  Jurusan : <strong>IPA</strong>
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
                  SMP PGRI 117 KARANG TENGAH
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse"
              >
                <div class="accordion-body">
                  <strong>2005 - 2008</strong>
                  <br />
                  <strong>CILEDUG, KOTA TANGERANG</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Formal;
// import { Link } from "react-router-dom";
// import satu from "../assets/img/projects (1).jpg";
// import dua from "../assets/img/projects (2).jpg";
// import tiga from "../assets/img/projects (3).jpg";
// import empat from "../assets/img/projects (4).jpg";
// import lima from "../assets/img/projects (5).jpg";

// const Formal = () => {
//   return (
//     <div className="container-row d-flex justify-content-center align-items-around p-3 mt-3 ">
//       <div className="container-fluid row justify-content-center m-2">
//         <div className="col-md-3 p-2 d-flex justify-content-center">
//           <div class="card" style={{ width: "18rem" }}>
//             <img src={satu} class="card-img-top" alt="xxx" />
//             <div class="card-body">
//               <h5 class="card-title">Card title</h5>
//               <p class="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//               <Link to="#" class="btn btn-secondary">
//                 Go somewhere
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 p-2 d-flex justify-content-center">
//           <div class="card" style={{ width: "18rem" }}>
//             <img src={dua} class="card-img-top" alt="xxx" />
//             <div class="card-body">
//               <h5 class="card-title">Card title</h5>
//               <p class="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//               <Link to="#" class="btn btn-secondary">
//                 Go somewhere
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 p-2 d-flex justify-content-center">
//           <div class="card" style={{ width: "18rem" }}>
//             <img src={tiga} class="card-img-top" alt="xxx" />
//             <div class="card-body">
//               <h5 class="card-title">Card title</h5>
//               <p class="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//               <Link to="#" class="btn btn-secondary">
//                 Go somewhere
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 p-2 d-flex justify-content-center">
//           <div class="card" style={{ width: "18rem" }}>
//             <img src={empat} class="card-img-top" alt="xxx" />
//             <div class="card-body">
//               <h5 class="card-title">Card title</h5>
//               <p class="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//               <Link to="#" class="btn btn-secondary">
//                 Go somewhere
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-3 p-2 d-flex justify-content-center">
//           <div class="card" style={{ width: "18rem" }}>
//             <img src={lima} class="card-img-top" alt="xxx" />
//             <div class="card-body">
//               <h5 class="card-title">Card title</h5>
//               <p class="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//               <Link to="#" class="btn btn-secondary">
//                 Go somewhere
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Formal;
