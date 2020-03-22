import React from "react";
import "./Footer.css";
function Footer(props) {
  return (
    <div className="AccountOverviewFooter">
      <div className="container">
        <div className="AccountOverviewFooterFirstRow">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-2">
              <a href="http://spotify.com">
                <img
                  className="logo"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSBmnPgQKW4JLrNcSFhPFCLHz3t8kT1pZl0PVkLYsa8FoScWYda"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2">
              <h5 className="FooterHeader">COMPANY</h5>
              <ul>
                <li className="FooterElement">
                  <a href="http://google.com">About</a>
                </li>
                <li className="FooterElement">
                  <a href="http://google.com">Jobs</a>
                </li>
                <li className="FooterElement">
                  <a href="http://google.com">For the Record</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2">
              <h5 className="FooterHeader">COMMUNITIES</h5>
              <ul>
                <li className="FooterElement">
                  <a href="http://google.com">For Artists</a>
                </li>
                <li className="FooterElement">
                  <a href="http://google.com">Developers</a>
                </li>
                <li className="FooterElement">
                  <a href="http://google.com">Brands</a>
                </li>
                <li className="FooterElement">
                  <a href="http://google.com">Investors</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-2">
              <h5 className="FooterHeader">USEFUL LINKS</h5>
              <ul>
                <li className="FooterElement">
                  <a href="http://google.com">Help</a>
                </li>
                <li className="FooterElement">
                  <a href="http://google.com">Web Player</a>
                </li>
                <li className="FooterElement">
                  <a href="http://google.com">Free Mobile App</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4 icons">
              <a
                className="btn btn-social-icon btn-instagram"
                href="http://instagram.com/spotify"
              >
                <i className="fa fa-instagram"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/spotify"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/spotify"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="AccountOverviewFooterSecondRow">
          <div className="col-sm-9 col-md-9 linespacing">
            <a href="http://google.com">Legal</a>
            <a href="http://google.com">Privacy Center</a>
            <a href="http://google.com">Privacy Policy</a>
            <a href="http://google.com">Cookies</a>
            <a href="http://google.com">About Ads</a>
          </div>
          <div className="col-sm-3 col-md-3">
            <p className="stylesecondrow2">© 2020 Spotify AB</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
