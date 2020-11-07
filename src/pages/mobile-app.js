import React from "react"
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


export default function MobileApp() {
  return (
    <div>
  <section className="pt-6 pt-md-8">
    <div className="container">
      <div className="row align-items-center justify-content-center justify-content-md-between">
        <div className="col-10 col-sm-8 col-md-6 order-md-2">
          {/* iPhone + iPhone */}
          <div className="device-combo device-combo-iphonex-iphonex mb-6 mb-md-0">
            {/* iPhone */}
            <div className="device device-iphonex" data-aos="fade-left">
              <img
                src="assets/img/screenshots/mobile/home.jpg"
                className="device-screen"
                alt="..."
              />
              <img
                src="assets/img/devices/iphonex.svg"
                className="img-fluid"
                alt="..."
              />
            </div>
            {/* iPhone */}
            <div
              className="device device-iphonex"
              data-aos="fade-left"
              data-aos-delay={150}
            >
              <img
                src="assets/img/screenshots/mobile/rental.jpg"
                className="device-screen"
                alt="..."
              />
              <img
                src="assets/img/devices/iphonex.svg"
                className="img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-5" data-aos="fade-right">
          {/* Heading */}
          <h1 className="font-weight-bold">
            Chat with <span className="text-primary">friends.</span> <br />
            Anywhere in the world.
          </h1>
          {/* Text */}
          <p className="font-size-lg text-muted mb-6">
            Keep in touch with your friends and family with free international
            chats, calls, and even games. Landkit connects you with the world.
          </p>
          {/* Form */}
          <form className="mb-6 mb-md-8 mb-md-0 order-md-1">
            <div className="row gx-4">
              <div className="col">
                {/* Inout */}
                <input type="url" className="form-control bg-light border-0" />
              </div>
              <div className="col-auto">
                {/* Submit */}
                <button type="submit" className="btn btn-primary">
                  Text link
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* ABOUT */}
  <section className="pt-8 pt-md-11">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-12 col-md-6 mb-5 mb-md-0">
          {/* Images */}
          <div className="row">
            <div className="col-6 mr-n5">
              <img
                src="assets/img/photos/photo-23.jpg"
                alt="..."
                className="img-fluid mb-4 rounded"
                data-aos="fade-right"
                data-aos-delay={100}
              />
              <img
                src="assets/img/photos/photo-25.jpg"
                alt="..."
                className="img-fluid rounded"
                data-aos="fade-right"
                data-aos-delay={150}
              />
            </div>
            <div className="col-6 mt-8">
              <img
                src="assets/img/photos/photo-22.jpg"
                alt="..."
                className="img-fluid mb-4 rounded"
                data-aos="fade-right"
              />
              <img
                src="assets/img/photos/photo-24.jpg"
                alt="..."
                className="img-fluid rounded"
                data-aos="fade-right"
                data-aos-delay={50}
              />
            </div>
          </div>{" "}
          {/* / .row */}
        </div>
        <div className="col-12 col-md-6 col-lg-5" data-aos="fade-left">
          {/* Heading */}
          <h2 className="font-weight-bold">
            Show your friends and family where you've been.
          </h2>
          {/* Text */}
          <p className="font-size-lg text-muted mb-4">
            Staying connected while traveling can be tough, but Landkit makes it
            easy by automatically sharing your experiences.
          </p>
          {/* Button */}
          <a href="#!" className="btn btn-primary">
            Learn more
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* ABOUT */}
  <section className="py-8 py-md-11">
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-12 col-md-6 col-lg-7 order-md-2">
          {/* Image */}
          <img
            src="assets/img/screenshots/ui/mobile-chat.png"
            alt="..."
            className="img-fluid mb-6 mb-md-8 mb-md-0"
            data-aos="fade-left"
          />
        </div>
        <div
          className="col-12 col-md-6 col-lg-5 order-md-1"
          data-aos="fade-right"
        >
          {/* Heading */}
          <h2 className="font-weight-bold">
            Use your phone number so you're easy to find.
          </h2>
          {/* Text */}
          <p className="font-size-lg text-muted mb-0">
            Landkit uses your phone number for your account instead of an email
            or username so you're super easy to find for all your friends.
          </p>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* SHAPE */}
  <div className="position-relative">
    <div className="shape shape-top shape-fluid-x svg-shim text-white">
      {"{"}
      {"{"}&gt; waves/wave-1{"}"}
      {"}"}
    </div>
  </div>
  {/* VIDEO */}
  <section
    className="py-12 py-md-13 bg-cover"
    style={{ backgroundImage: "url(assets/img/covers/cover-2.jpg)" }}
  >
    <div className="container py-md-13">
      <div className="row">
        <div className="col-12 text-center">
          {/* Button */}
          <a
            className="btn btn-pill btn-white text-body shadow lift"
            data-bigpicture='{"ytSrc": "9I-Y6VQ6tyI"}'
            href="#"
          >
            <span className="h6 text-uppercase font-weight-bold">
              <i className="fe fe-play mr-2" /> Watch video
            </span>
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
  {/* CTA */}
  <section className="pt-6 pt-md-8">
    <div className="container pb-6 pb-md-8 border-bottom">
      <div className="row align-items-center">
        <div className="col-12 col-md">
          {/* Heading */}
          <h3 className="font-weight-bold mb-1">Get the app now!</h3>
          {/* Text */}
          <p className="text-muted mb-6 mb-md-0">Travel and share with ease.</p>
        </div>
        <div className="col-auto">
          <a href="#!" className="text-reset d-inline-block mr-1">
            <img
              src="assets/img/buttons/button-app.png"
              className="img-fluid"
              alt="..."
              style={{ maxWidth: 155 }}
            />
          </a>
          <a href="#!" className="text-reset d-inline-block">
            <img
              src="assets/img/buttons/button-play.png"
              className="img-fluid"
              alt="..."
              style={{ maxWidth: 155 }}
            />
          </a>
        </div>
      </div>{" "}
      {/* / .row */}
    </div>{" "}
    {/* / .container */}
  </section>
</div>

  )
}
