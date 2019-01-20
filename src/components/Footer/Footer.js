import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="container">
        <div className="bg-light">
          <div className="row">
            <div className="col-12 col-md-6">@Copyright Mossnana Inc.</div>
            <div className="col-12 col-md-6">
              <span>
                Contact Me{" "}
                <a
                  href="https://twitter.com/intent/tweet?screen_name=permpoonchao&ref_src=twsrc%5Etfw"
                  class="twitter-mention-button"
                  data-show-count="false"
                >
                  Tweet to @permpoonchao
                </a>
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charset="utf-8"
                />
              </span>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
