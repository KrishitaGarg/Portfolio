import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../../Assets/avatar.png";
import "animate.css/animate.min.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          {/* Left side - illustration */}
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Get in touch illustration"
                />
              )}
            </TrackVisibility>
          </Col>

          {/* Right side - form */}
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <p>
                    Have a project in mind, a question, or just want to say hi?
                    Fill out the form below and I’ll get back to you as soon as
                    possible.
                  </p>

                  <form
                    action="https://formsubmit.co/krishitagarg@gmail.com"
                    method="POST"
                  >
                    {/* Redirect to thank-you page after submit */}
                    <input
                      type="hidden"
                      name="_next"
                      value="https://krishitagarg.vercel.app/thank-you"
                    />
                    {/* Disable Captcha */}
                    <input type="hidden" name="_captcha" value="false" />

                    <Row>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="First Name"
                          placeholder="First Name"
                          required
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="Last Name"
                          placeholder="Last Name"
                          required
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="Email"
                          placeholder="Email Address"
                          required
                        />
                      </Col>
                      <Col xs={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          name="Phone"
                          placeholder="Phone Number (Optional)"
                        />
                      </Col>
                      <Col xs={12} className="px-1">
                        <textarea
                          rows="6"
                          name="Message"
                          placeholder="Your Message"
                          required
                        ></textarea>
                        <button type="submit">
                          <span>Send Message</span>
                        </button>
                      </Col>
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
