import React, { Component } from "react";
import axios from "axios";

//# CSS
import "./form.scss";
/*====================*/

import { Input } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Button } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { match } from "check-types";
import { indexOf } from "lodash";

export default class FormComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      company: "",
      phone: "",
      email: "",
      checkbox: "",
      isEmailValid: false,
      emailErr: false,
      canSubmit: true,
      releaseBtn: true,

      idFromPost: null
    };
  }

  handleEmail=()=>{

    const emailRegex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const findChar = this.state.email.indexOf("@");
    if(!match(this.state.email, emailRegex)){
      this.state.isEmailValid = false;
      this.state.emailErr = true
    } else {
      this.state.isEmailValid = true;
      this.state.emailErr = false

    }
  }

  handleInputs = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });  
    this.handleEmail()
    if (
      this.state.fullName &&
      this.state.company &&
      this.state.phone &&
      this.state.email &&
      e.target.checked &&
      this.state.isEmailValid
    ) {
      this.state.canSubmit = false;
    } else {
      this.state.canSubmit = true;
    }
  };


  submitForm=()=>{
    const data = {
      name: String(this.state.fullName),
      company_name: String(this.state.company),
      email: String(this.state.email),
      phone: String(this.state.phone),
    };

    const headersToSend = {
      "x-api-key": "VXUsgQ2jsq3EM30icjHA91tETkqFwtXDak07xebM",
      "Content-Type": "application/json",
    };
    fetch({
      method: "POST",
      url: "https://u5d6gnw6aj.execute-api.us-east-1.amazonaws.com/api/data",
      headers: headersToSend,
      body: data,
    }).then((res) => {
      if (res.status === 200) {
        console.log(res);
        this.state.releaseBtn = false;
      }
    });    
  }

  downloadFile = () => {
    // fetch({
    //   method: "GET",
    //   url: "https://u5d6gnw6aj.execute-api.us-east-1.amazonaws.com/api/file",
    //   headers: headersToSend,
    //   body: JSON.stringify(data),
    // }).then((res) => {
    //   if (res.status === 200) {
    //     this.state.releaseBtn = false;   
    //   }
    // });
  };




  render() {
    return (
      <div>
        <section className="formSection">
          <div className="top-info">
            <h3>Want to get the full version?</h3>
            <h5>Fill in the form bellow:</h5>
          </div>

          <div className="form-layout">
            <form>
              <FormControl>
                <InputLabel htmlFor="fullName">Full Name</InputLabel>
                <Input
                  onChange={this.handleInputs}
                  type="text"
                  name="fullName"
                  id="fullNameInput"
                  aria-describedby="helper-text-name"
                />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="company">Company Name</InputLabel>
                <Input
                  onChange={this.handleInputs}
                  type="text"
                  name="company"
                  id="companyInput"
                />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="phone">Phone</InputLabel>
                <Input
                  onChange={this.handleInputs}
                  type="number"
                  name="phone"
                  id="phoneInput"
                  aria-describedby="helper-text-phone"
                />
              </FormControl>

              <FormControl>
                <InputLabel htmlFor="email">Email address</InputLabel>
                <Input
                  onChange={this.handleInputs}
                  type="text"
                  id="emailInput"
                  name="email"
                />
              <span className="error" hidden={!this.state.emailErr}>
              {!this.state.isEmailValid ? 'Please enter a valid email!' : ''}
              </span>
              </FormControl>

              <div className="btnDiv">
                <Button
                  size="medium"
                  className=""
                  disabled={this.state.canSubmit}
                  onClick={this.submitForm}
                >
                  Submit
                </Button>
                <Button
                  size="medium"
                  className=""
                  disabled={this.state.releaseBtn}
                  onClick={this.downloadFile}
                >
                  Download
                </Button>
              </div>
              <div className="agreementDiv">
                <div className="checkBoxWrapper">
                  <Checkbox
                    name="checkbox"
                    required={true}
                    onChange={this.handleInputs}
                  ></Checkbox>
                </div>
                <div className="agreementText">
                  I agree to the privacy policy including for Joonko to use my
                  contact details to contact me for marketing purposes
                </div>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}
