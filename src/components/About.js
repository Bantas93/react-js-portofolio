import { Link } from "react-router-dom";
import idn from "./../assets/img/idn.png";
import grd from "./../assets/img/grd.png";
import male from "./../assets/img/male.png";
import weight from "./../assets/img/weight.png";
import height from "./../assets/img/height.png";
const About = () => {
  return (
    <div className="bg-About text-center pt-5">
      <h1>About</h1>
      <div className="row justify-content-center p-3 mt-5 ">
        <div className="list-groups col-md-5 text-start ">
          <Link to="#" class="list-group-item list-group-item-action">
            <img
              src={idn}
              width="20"
              style={{ margin: "20px" }}
              alt="Indonesian Flag"
            ></img>
            Jakarta
          </Link>
          <Link
            // to="https://bsi.today/"
            // target="blank"
            class="list-group-item list-group-item-action"
          >
            <img
              src={grd}
              width="20"
              style={{ margin: "20px" }}
              alt="Indonesian Flag"
            ></img>
            Bina Sarana Informatika
          </Link>
          <Link to="#" class="list-group-item list-group-item-action">
            <img
              src={male}
              width="20"
              style={{ margin: "20px" }}
              alt="Indonesian Flag"
            ></img>
            Male
          </Link>
          <Link to="#" class="list-group-item list-group-item-action">
            <img
              src={weight}
              width="20"
              style={{ margin: "20px" }}
              alt="Indonesian Flag"
            ></img>
            74 Cm
          </Link>
          <Link to="#" class="list-group-item list-group-item-action">
            <img
              src={height}
              width="20"
              style={{ margin: "20px" }}
              alt="Indonesian Flag"
            ></img>
            63 Kg
          </Link>
        </div>
      </div>
    </div>
  );
};
export default About;
