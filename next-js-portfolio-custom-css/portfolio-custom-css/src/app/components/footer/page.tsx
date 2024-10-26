import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer>
        <div className="section-footer">
          <div className="footer1 common-footer">
            <h3>Mr.Burger</h3>
            <p>
              <strong>phone No: </strong>03183246070
            </p>
            <p>
              <strong>Email: </strong>Hamzii2205@gmail.com
            </p>
            <p>
              <strong>Address:</strong> City, Karachi ; Area, Scheme 22, Gulzar
              e Hijri
            </p>
            <p>
              <strong>Follow us</strong>
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
            <div className="sore-div">
              {/* <Image src=" " alt="App store" />
              <Image src="" alt="play store" /> */}
            </div>
            <p>Secured payment Gateways</p>
            {/* <Image src="" alt="" /> */}
          </div>
        </div>
      </footer>
    </>
  );
}
