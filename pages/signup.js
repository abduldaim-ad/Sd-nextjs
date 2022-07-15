import { Row, Col, Container } from "react-bootstrap";
import Button from "@mui/material/Button";
import styles from "../styles/LoginSignUp.module.css";
import Link from "next/link";
import Head from "next/head";
import { Image } from "react-bootstrap";
import { useState } from "react";
import Script from "next/script";
import {useRouter} from 'next/router'
import baseUrl from '../helpers/baseUrl'

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const router = useRouter()

  const fullNameReg = /^[a-zA-Z]/;
  const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const strongPassStren =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
  const medPassStren =
    /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))/;

  const EmailValidator = () => {
    var x = document.getElementById("email_");

    if (emailReg.test(email)) {
      x.classList.remove("is-invalid");
      x.classList.add("is-valid");
    } else {
      x.classList.remove("is-valid");
      x.classList.add("is-invalid");
    }
  };

  const fullNameValidator = () => {
    let nameIn = document.getElementById("_fullName");
    if (fullNameReg.test(fullName) && fullName !== "") {
      nameIn.classList.remove("is-invalid");
      nameIn.classList.add("is-valid");
    } else {
      nameIn.classList.remove("is-valid");
      nameIn.classList.add("is-invalid");
    }
  };

  // Password strength indicator
  const passStrenHandler = () => {
    let passStrenWrap = document.getElementById("_pass_strength_wrap");
    if (strongPassStren.test(password)) {
      passStrenWrap.classList.add("strong");
      passStrenWrap.classList.remove("average");
      passStrenWrap.classList.remove("weak");
      console.log("pass is strongs");
    } else if (medPassStren.test(password)) {
      passStrenWrap.classList.add("average");
      passStrenWrap.classList.remove("strong");
      passStrenWrap.classList.remove("weak");
      console.log("pass is average");
    } else {
      passStrenWrap.classList.add("weak");
      passStrenWrap.classList.remove("average");
      passStrenWrap.classList.remove("strong");
      console.log("pass is weak");
    }
  };

  // Password Validation
  const PassValidator = () => {
    var x = document.getElementById("pass_");
    var y = document.getElementById("passCon_");

    if (strongPassStren.test(password)) {
      console.log("Password is strong");
    } else if (medPassStren.test(password)) {
      console.log("Password is Med");
    } else {
      console.log("Password is Week");
    }

    if (password == confirmPassword && password.length >= 4) {
      x.classList.remove("is-invalid");
      x.classList.add("is-valid");
      y.classList.remove("is-invalid");
      y.classList.add("is-valid");
    } else {
      x.classList.remove("is-valid");
      x.classList.add("is-invalid");
      y.classList.remove("is-valid");
      y.classList.add("is-invalid");
    }
  };

  // For google recaptcha
  function get_action(form) {
    var v = grecaptcha.getResponse();
    if (v.length == 0) {
      document.getElementById("captcha").innerHTML =
        "You can't leave Captcha Code empty";
      return false;
    } else {
      document.getElementById("captcha").innerHTML = "Captcha completed";
      return true;
    }
  }


  const SubmitSignUp = async (e) => {
    e.preventDefault()
    console.log(`email${email} and password ${password}`)
    const res=await fetch(`${baseUrl}/api/signup`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password,
        fullName
      })
    })
    const res2 = await res.json()
    if(res2.error){
      console.log(`testing error`)
    }else{
      console.log(`testing Success`)
      router.push('/login')
    }
  }

  return (
    <>
      <Head>
        <title>Sign Up | SayabiDevs</title>
        <link rel="icon" href="/images/favicon.ico" />
        {/* <script ></script> */}
      </Head>

      <Script src="https://www.google.com/recaptcha/api.js"></Script>

      <Container>
        <Row
          className="d-flex justify-content-center align-items-center py-3 my-3"
          style={{ minHeight: "80vh" }}
        >
          <Col lg={5}>
            <form className="d-flex justify-content-center align-items-center flex-column">
              <p className="h3 my-2 align-self-start">Welcome to</p>
              <img
                src="/images/home/logo.png"
                height={100}
                alt="SayabiDevs"
                className="mb-3"
              />

              <div className="w-100 d-flex justify-content-center align-items-center flex-column">
                <input
                  type="text"
                  className={`${styles.inputStyles} px-2 my-2 mx-2 w-100 py-2 form-control`}
                  placeholder="Name"
                  id="_fullName"
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                  onBlur={() => {
                    fullNameValidator();
                  }}
                />
                <div className="invalid-feedback mx-3">
                  Your Name must starts with Alphabets
                </div>
              </div>

              <div className="w-100 d-flex justify-content-center align-items-center flex-column">
                <input
                  type="email"
                  className={`${styles.inputStyles} px-2 my-2 mx-2 w-100 py-2 form-control`}
                  placeholder="Email"
                  id="email_"
                  onBlur={() => {
                    EmailValidator();
                  }}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
                <div className="invalid-feedback mx-3">
                  Enter a valid Email Address
                </div>
              </div>

              <input
                type="password"
                className={`${styles.inputStyles} px-2 my-2 mx-2 w-100 py-2 form-control`}
                placeholder="Password"
                id="pass_"
                onBlur={() => {
                  PassValidator();
                }}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onInput={() => {
                  passStrenHandler();
                }}
              />
              <input
                type="password"
                className={`${styles.inputStyles} px-2 my-2 mx-2 w-100 py-2 form-control`}
                placeholder="Confirm Password"
                id="passCon_"
                onBlur={() => {
                  PassValidator();
                }}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
              />

              <div className="passStrength w-75 my-3">
                <div className="strengthPercent" id="_pass_strength_wrap">
                  <span></span>
                </div>
              </div>

              <div className="d-flex justify-content-start align-items-center w-100">
                <div
                  className="g-recaptcha"
                  id="rcaptcha"
                  data-sitekey="site key"
                ></div>
              </div>

              <div className="d-flex justify-content-between align-items-center w-100 flex-row">
                <div className="d-flex justify-content-start align-items-center">
                  <p className="mx-1 my-2">Remember me</p>
                  <input
                    type="checkbox"
                    className={`mx-1 my-2 form-check-input`}
                  />
                </div>
              </div>

              <div className="form-check paddLeftZero d-flex justify-content-start align-items-center w-100">
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
                <input
                  className={`mx-1 my-2 form-check-input`}
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
              </div>

              <div className="d-flex justify-content-center align-items-center w-100 flex-row">
                <p className="mx-2 my-2">Already a Member?</p>
                <Link href="/login">
                  <a className={`${styles.anchorTagStyles} mx-2 my-2`}>Login</a>
                </Link>
              </div>

              <Button
                variant="contained"
                className="materialUiButton my-2 w-100 py-2"
                onClick={(e)=>SubmitSignUp(e)}
              >
                Sign Up
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
