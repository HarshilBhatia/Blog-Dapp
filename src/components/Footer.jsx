import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                repudiandae a dolor asperiores, quasi aliquam in debitis
                repellendus veritatis consectetur similique necessitatibus,
                fugiat deserunt aspernatur alias voluptatum hic tempore, ullam
                adipisci quidem. Repellat iste, iure laborum assumenda velit,
                rem cum et repudiandae voluptatum, voluptatibus qui optio ullam
                consectetur vitae facere dicta perspiciatis in voluptate ducimus
                odit esse dolorem aut. Sunt?
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul class="footer-links">
                <li>BlockChain</li>
                <li>UI Design</li>
                <li>Golang</li>
                <li>Javascript</li>
                <li>Templates</li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul class="footer-links">
                <li>About Us</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; 2020 All Rights Reserved by
                <a href="#">Harshil Bhatia</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
