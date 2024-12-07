import "./contact.css";

export default function Contact() {
  return (
    <>
      <div className="contact_main">
        <div className="circle_container">
          <div className="bg_circle cont_bg_circle1"></div>
          <div className=" cont_bg_circle2"></div>
        </div>
        <div className="contact_container">
          <div className="cont_head">
            <h1>Let&apos;s talk on something great!</h1>
          </div>
          <div className="cont_form">
            <div className="inner_form">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
              <br />
              <br />
              <br />
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
              <br />
              <br />
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" />
              <button
                title="button"
                type="button"
                className="view_btn sbmit_btn"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
