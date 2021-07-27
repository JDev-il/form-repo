//# CSS
import "./content.scss";
/*====================*/

import React, { Component } from "react";

export default class ContentComponent extends Component {
  render() {
    return (
      <div className="contentContainer">
        <div className="contentHeader">
          <h1>2021 Inclusive Workplace Calendar</h1>
          <h3>Whitepaper</h3>
        </div>
        <div className="contentBody">
          <p>
            Joonko’s 2021 Inclusive Workplace Calendar aims to help your HR
            teams with workplace diversity so everyone feels like part of the
            plan. Amplify meaningful days across the organizational calendar and
            embrace communal celebrations. This year’s addition also includes
            tips on maintaining the sense of community while remote with ideas
            to support workplace inclusion initiaives. We’ve highlighted
            important (holy)days, including:
          </p>
          <div>
            <p>
              • Major religious and ethical days of celebration and observance
            </p>
            <p>• Social Media tips to showcase your D&I initiatives</p>
            <p>
              • Activities to help you celebrate all the biggest holidays with
              inclusion in mind
            </p>
          </div>
          <p>
            Download our Inclusive Workplace Calendar and celebrate all the best
            days throughout the year the right way.
          </p>
        </div>
      </div>
    );
  }
}
