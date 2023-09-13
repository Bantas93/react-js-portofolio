import { Link } from "react-router-dom";
import wa_icon from "./../assets/img/wa_icon.png";
import maps_icon from "./../assets/img/maps_icon.png";
import fb_icon from "./../assets/img/fb_icon.png";
import tele_icon from "./../assets/img/tele_icon.png";
import gmail_icon from "./../assets/img/gmail_icon.png";
import github_icon from "./../assets/img/github_icon.png";

const Contact = () => {
  return (
    <div className="bg-Contact text-center pt-5">
      <h1>Contact</h1>
      <div className="row justify-content-center p-3 mt-5 ">
        <div className="list-groups text-start">
          <Link
            to="https://api.whatsapp.com/send?phone=6287780310045&text=Halo,%20saya%20nama_anda,%20saya%20ingin%20bertanya%20kepada%20Anda."
            target="blank"
            class="list-group-item list-group-item-action"
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
            to="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d316.8542823042292!2d106.6945519513162!3d-6.249261849639456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTQnNTcuNCJTIDEwNsKwNDEnNDAuNiJF!5e0!3m2!1sid!2sid!4v1694231801504!5m2!1sid!2sid"
            target="blank"
            class="list-group-item list-group-item-action "
          >
            <img
              src={maps_icon}
              width="20"
              style={{ margin: "20px" }}
              alt="Indonesian Flag"
            ></img>
            Location
          </Link>
          <Link
            to="https://www.facebook.com/messages/t/bantaz.zhaa"
            target="blank"
            class="list-group-item list-group-item-action"
          >
            <img
              src={fb_icon}
              width="20"
              style={{ margin: "20px" }}
              alt="Indonesian Flag"
            ></img>
            Facebook
          </Link>
          <Link
            to="https://t.me/bantas93"
            target="blank"
            class="list-group-item list-group-item-action"
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
            to="mailto:bantaz.mtdn@gmail.com?subject=Tulis%20Pertanyaan%20Anda&body=Halo,%20saya%20ingin%20menanyakan%20beberapa%20informasi%20tentang%20Anda."
            target="blank"
            class="list-group-item list-group-item-action"
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
            to="https://github.com/Bantas93"
            target="blank"
            class="list-group-item list-group-item-action"
          >
            <img
              src={github_icon}
              width="20"
              style={{ margin: "20px" }}
              alt="Indonesian Flag"
            ></img>
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Contact;
