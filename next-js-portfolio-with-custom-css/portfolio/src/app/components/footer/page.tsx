import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { fa0 } from "@fortawesome/free-solid-svg-icons/fa0";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="section-footer">
          <div className="footer1 common-footer">
            <h3>Contact</h3>

            <p>
              <strong>Phone No: </strong>
              <a href="tel:03183246070">03183246070</a>
            </p>
            <p>
              <strong>Email: </strong>
              <a href="mailto:hamzii2205@gmail.com">Hamzii2205@gmail.com</a>
            </p>
            <p>
              <strong>Address:</strong> City: Karachi, Area: Scheme 33, Gulzar e
              Hijri
            </p>
            <p>
              <strong>Follow me</strong>
            </p>
            <div className="icon-div">
              <a href="https://www.facebook.com/M.Hamza2205" target="_blank">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/hamza-shabir-796b8a261/"
                target="_blank"
              >
                <i className="fa-brands fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/?hl=en" target="_blank">
                <i className="fa-brands fab fa-instagram"></i>
              </a>
              <a href="#">
                <img src="photos/instagram.png" alt="" />
              </a>
              <a href="#">
                <img src="photos/twitter.png" alt="" />
              </a>
              <a href="#">
                <img src="photos/linkedin.png" alt="" />
              </a>
            </div>
          </div>
          <div className="footer2 common-footer">
            <h3>More Information</h3>
            <a href="#">Privicy </a>
            <a href="#">Delivery Information </a>
            <a href="#">Terms & Condition</a>
            <a href="#">Contact Us </a>
          </div>
          <div className="footer3 common-footer">
            <h3>Install App</h3>
            <p>Install from App store or Google Play</p>
            <div className="store-div">
              <Image
                src="/image/app store.jpg"
                width={170}
                height={48}
                alt="App store"
              />
              <Image
                src="/image/play store.jpg"
                alt="play store"
                width={170}
                height={48}
              />
            </div>
            <p>Secured payment Gateways</p>
            <Image
              src="/image/payment method.png"
              width={240}
              height={32}
              alt="payment gateways"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
