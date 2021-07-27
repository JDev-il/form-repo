//# CSS
import "./main.scss";
/*====================*/
import React, { Component } from "react";

/*============  Components  =============*/
import FormComponent from "../../components/form/form";
import ContentComponent from "../../components/content/content";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fromAppComponent: props.takeData,
      ff: String,
    };
  }

  componentDidMount() {
    this.setState({ ff: "2021 Inclusive Workplace Calendar" });
  }

  componentDidUpdate(state = this.state) {
    if (state !== this.state) {
      console.log(this.state);
    }
  }

  render() {
    return (
      <div className="mainContainer">
        <section className="mainSection">
          <div className="componentsWrapper">
            <div className="left">
              <ContentComponent></ContentComponent>
            </div>
            <div className="right">
              <FormComponent></FormComponent>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
