import "./Mfi.css";
import React, { useEffect, useState } from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.sessionStorage.getItem("token") != null) {
      navigate("/layout");
    }
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    navigate("/layout");
    console.log("ssadsa", data);

    axios
      .post("https://admin-stage.myfitindia.com/api/v1/auth/login", data)
      .then(response => {
        console.log("subumitdata", response.data);
        // if(response.data.temporary_token !=null){
        //     var temporary_token = response.data.errors;
        //   window.sessionStorage.setItem("token", temporary_token);
        //  console.log("dsfsdf",window.sessionStorage.getItem("token"));
        // console.log("sdsa", temporary_token);

        //  navigate("/layout");
        // }
      })
      .catch(error => {
        if (error.response.data.errors.length > 0) {
          alert(error.response.data.errors[0].message);
        }
      });
   
  };
  const [values, setValues] = useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  return (
    <div className="login_page">
      <div className="login_card_signin">
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="login_card_signin_content"
        >
          <Form.Field>
            <label>
              Emial or Phone number
              <input
                type="text"
                {...register("phone", {
                  required: true,
                  pattern: /^(?:\d{10}|\w+@\w+\.\w{2,3})$/,
                })}
              />
            </label>
          </Form.Field>
          {errors.phone && (
            <p style={{ margin: "0px", color: "red" }}>
              Please enter valid email id or phone number
            </p>
          )}
          <Form.Field>
            <label>
              Password
              <input
                className="password_input"
                type={values.showPassword ? "text" : "password"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                })}
              />
              <IconButton className="icon" onClick={handleClickShowPassword}>
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </label>
          </Form.Field>
          {errors.password && (
            <p style={{ margin: "0px", color: "red" }}>
              Please fill the Password
            </p>
          )}
          <p style={{ alignSelf: "end", marginBottom: "20px" }}>
            Forgot password?
          </p>
          <button className="button_login">Login</button>
          <p style={{ marginBottom: "20px", textAlign: "center" }}>
            Don't have an account?{" "}
            <a href="/" style={{ textDecoration: "none" }}>
              Sign Up
            </a>
          </p>
          <Button className="button_with_otp">Login with OTP</Button>
        </Form>
      </div>
    </div>
  );
}
