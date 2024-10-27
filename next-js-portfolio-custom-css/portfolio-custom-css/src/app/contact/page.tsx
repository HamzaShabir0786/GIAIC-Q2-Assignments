export default function Contact() {
  return (
    <>
      <section className="section-contact">
        <form action="https://formspree.io/f/manyqbel" method="POST">
          <div className="contact-div">
            <div className="contact-item1 contact-items">
              <div className="info-flex">
                <label htmlFor="firstName">
                  <strong>Name:</strong>
                </label>
                <input
                  type="text"
                  name="name"
                  id="firstName"
                  className="contact-inputs"
                  placeholder="What is your name?"
                />
              </div>
            </div>
            <div className="contact-item2 contact-items">
              <div className="info-flex">
                <label htmlFor="lastName">
                  <strong>Last Name:</strong>
                </label>
                <input
                  type="text"
                  name="Last Name"
                  id="lastName"
                  className="contact-inputs"
                  placeholder="What is your last name?"
                />
              </div>
            </div>
            <div className="contact-item3 contact-items">
              <div className="info-flex">
                <label htmlFor="adress">
                  <strong>Adress:</strong>
                </label>
                <input
                  type="text"
                  name="Adress"
                  id="adress"
                  className="contact-inputs"
                  placeholder="What is your Adress?"
                />
              </div>
            </div>
            <div className="contact-item4 contact-items">
              <div className="info-flex">
                <label htmlFor="email">
                  <strong>Email:</strong>
                </label>
                <input
                  type="email"
                  name="Email"
                  required
                  id="adress"
                  className="contact-inputs"
                  placeholder="xyz@example.com"
                />
              </div>
            </div>
            <div className="contact-item5 contact-items">
              <div className="info-flex">
                <label htmlFor="message">
                  <strong>Messsage:</strong>
                  <br />
                </label>
                <textarea
                  name="Message"
                  id="message"
                  className="contact-inputs"
                  placeholder="Message Box..."
                  rows={1}
                  cols={202}
                />
              </div>
            </div>
            <button type="submit" className="send-message-btn">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
