import { appStore, googlePlay, qrCode } from "../../Assets/Images/Images";
import SvgIcon from "../Shared/MiniComponents/SvgIcon";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.sections}>
          <section className={s.section1}>
            <b>Exclusive</b>
            <span>Subscribe</span>
            <p>Get 10% off your first order</p>

            <div className={s.input}>
              <input type="email" placeholder="Enter your email" id="email" />
              <label htmlFor="email" title="Send">
                <SvgIcon name="vector" />
              </label>
            </div>
          </section>

          <section className={s.section2}>
            <b>Support</b>

            <ul>
              <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </section>

          <section className={s.section3}>
            <b>Account</b>

            <ul>
              <li>My Account</li>
              <li>Login / Register</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Shop</li>
            </ul>
          </section>

          <section className={s.section4}>
            <b>Quick Link</b>

            <ul>
              <li>Privacy Policy</li>
              <li>Terms Of Use</li>
              <li>FAQ</li>
              <li>Contact</li>
            </ul>
          </section>

          <section className={s.section5}>
            <b>Download App</b>
            <p>Save $3 with App New User Only</p>

            <div className={s.appInfo}>
              <div className={s.qrCode}>
                <img src={qrCode} alt="QR Code" />
              </div>

              <div className={s.downloadButtons}>
                <button type="button">
                  <img src={googlePlay} alt="Download app at Google play" />
                </button>

                <button type="button">
                  <img src={appStore} alt="Download app at App store" />
                </button>
              </div>
            </div>

            <div className={s.socialMedia}>
              <a href="#" title="facebook">
                <SvgIcon name="facebook" />
              </a>

              <a href="#" title="twitter">
                <SvgIcon name="twitter" />
              </a>

              <a href="#" title="instagram">
                <SvgIcon name="instagram" />
              </a>

              <a href="#" title="linkedin">
                <SvgIcon name="linkedin" />
              </a>
            </div>
          </section>
        </div>

        <p className={s.copyRights}>
          <span>&copy;</span> Copyright Rimel 2022. All right reserved
        </p>
      </div>
    </footer>
  );
};
export default Footer;
