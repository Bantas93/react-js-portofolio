import { Link } from "react-router-dom";
import wa_icon from "./../assets/img/wa_icon.png";
import ig_icon from "./../assets/img/ig_icon.png";
import fb_icon from "./../assets/img/fb_icon.png";
import tele_icon from "./../assets/img/tele_icon.png";
import gmail_icon from "./../assets/img/gmail_icon.png";
import github_icon from "./../assets/img/github_icon.png";

const Contact = () => {
  return (
    <div className="bg-Contact text-center pt-5">
      <h1>Contact</h1>
      <div className="container d-flex justify-content-center p-3 mt-3 ">
        <div className="container-fluid row justify-content-center p-5 m-2">
          <div className="list-groups col-md-4 m-3 text-start">
            <Link
              to="https://api.whatsapp.com/send?phone=6287780310045&text=Halo,%20saya%20nama_anda,%20saya%20ingin%20bertanya%20kepada%20Anda."
              target="blank"
              class="list-group-item list-group-item-action m-2"
            >
              <img
                src={wa_icon}
                width="20"
                style={{ margin: "20px" }}
                alt="Indonesian Flag"
              ></img>
              WhatsApp
            </Link>
            <Link
              to="mailto:bantaz.mtdn@gmail.com?subject=Tulis%20Pertanyaan%20Anda&body=Halo,%20saya%20ingin%20menanyakan%20beberapa%20informasi%20tentang%20Anda."
              target="blank"
              class="list-group-item list-group-item-action m-2"
            >
              <img
                src={gmail_icon}
                width="20"
                style={{ margin: "20px" }}
                alt="Indonesian Flag"
              ></img>
              Gmail
            </Link>
            <Link
              to="https://www.facebook.com/messages/t/bantaz.zhaa"
              target="blank"
              class="list-group-item list-group-item-action m-2"
            >
              <img
                src={fb_icon}
                width="20"
                style={{ margin: "20px" }}
                alt="Indonesian Flag"
              ></img>
              Facebook
            </Link>
          </div>
          <div className="list-groups col-md-4 m-3 text-start">
            <Link
              to="https://t.me/bantas93"
              target="blank"
              class="list-group-item list-group-item-action m-2"
            >
              <img
                src={tele_icon}
                width="20"
                style={{ margin: "20px" }}
                alt="Indonesian Flag"
              ></img>
              Telegram
            </Link>
            <Link
              to="https://github.com/Bantas93"
              target="blank"
              class="list-group-item list-group-item-action m-2"
            >
              <img
                src={github_icon}
                width="20"
                style={{ margin: "20px" }}
                alt="Indonesian Flag"
              ></img>
              Github
            </Link>
            <Link
              to="https://www.instagram.com/bantassyarif"
              target="blank"
              class="list-group-item list-group-item-action m-2 "
            >
              <img
                src={ig_icon}
                width="20"
                style={{ margin: "20px" }}
                alt="Indonesian Flag"
              ></img>
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
