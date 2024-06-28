import { Input, Button, Spinner } from "@nextui-org/react";
import axios from 'axios';

import { FaLock, FaLockOpen } from "react-icons/fa";
import { useNavigate, NavLink } from 'react-router-dom';
import "./Singup.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useState } from "react";
import { toast, Bounce } from 'react-toastify';


export default function Singup() {
  let navigate = useNavigate();
  let [loading, setLoading] = useState(false)
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  async function submitRegister(values) {
    setLoading(true);

    try {
      let { data } = await axios.post(`https://e-commerce-api-v1-cdk5.onrender.com/api/v1/auths/signup`, values);
      console.log(data);
      toast.success('Registration has been successfully  ', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });

      navigate('/login');
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data.errors[0].msg, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  }


  let passwordRegex = /[a-zA-z]{2,8}/;
  let validationSchema = yup.object({
    name: yup.string().min(3, "min length for user name is 3").max(50, "max length for user name is 10").required("user Name is required"),
    email: yup.string().email("email in invalid").required("email is required"),

    password: yup
      .string()
      .matches(passwordRegex, "password is invalid ")
      .required("password is required"),
    passwordConfirm: yup.string().oneOf([yup.ref("password")], "rePassword must match password").required("rePassword is required")
  });
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      role: "user",
    },
    validationSchema,
    onSubmit: submitRegister,
  });
  let nameValidation = formik.errors.name && formik.touched.name;
  let emailValidation = formik.errors.email && formik.touched.email;
  let passwordValidation = formik.errors.password && formik.touched.password;
  let passwordConfirmdValidation =
    formik.errors.passwordConfirm && formik.touched.passwordConfirm;
  return (
    <>

      <div className="container w-5/6 border-b border-r border-gray-400  rounded-lg shadow-lg p-10 my-5">
        <div className="concat flex ">
          <div className="w-1/2  my-auto ">
            <h1 className="px-2 capitalize  text-4xl ">
              Sing up

            </h1>

            <form className="my-4 mx-2" onSubmit={formik.handleSubmit}>
              <div className="name my-2">
                <label
                  className="block text-gray-700 text-md  mb-1 px-2"
                  htmlFor="userName"
                >
                  Username :
                </label>
                <Input
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="text"
                  name="name"
                  id="username"
                  label="Name"
                  variant="bordered"
                  isInvalid={nameValidation ? "true" : "false"}
                  color={nameValidation ? "danger" : "success"}
                  errorMessage={nameValidation && formik.errors.name}
                />
              </div>

              <div className="email my-2">
                <label
                  className="block text-gray-700 text-md  mb-1 px-2"
                  htmlFor="userEmail"
                >
                  Email :
                </label>
                <Input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="email"
                  name="email"
                  id="userEmail"
                  label="Email"
                  variant="bordered"
                  isInvalid={emailValidation ? "true" : "false"}
                  color={emailValidation ? "danger" : "success"}
                  errorMessage={emailValidation && formik.errors.email}
                />

              </div>
              <div className="password my-2">
                <label
                  className="block text-gray-700 text-md  mb-1 px-2"
                  htmlFor="Password"
                >
                  Password :
                </label>
                <Input
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type={isVisible ? "text" : "password"}
                  name="password"
                  id="Password"
                  label="Password"
                  variant="bordered"
                  isInvalid={passwordValidation ? "true" : "false"}
                  color={passwordValidation ? "danger" : "success"}
                  errorMessage={passwordValidation && formik.errors.password}
                  endContent={
                    <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                      {isVisible ? (
                        <FaLockOpen className="text-xl    h-8 text-default-400 pointer-events-none" />
                      ) : (
                        < FaLock className="text-xl   h-8  text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }

                />

              </div>
              <div className="confirmPassword my-2">
                <label
                  className="block text-gray-700 text-md  mb-1 px-2"
                  htmlFor="passwordConfirm"
                >
                  Confirm Password :
                </label>
                <Input
                  value={formik.values.passwordConfirm}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  type="password"
                  name="passwordConfirm"
                  id="passwordConfirm"
                  label=" Confirm Password"
                  variant="bordered"
                  isInvalid={passwordConfirmdValidation ? "true" : "false"}
                  color={passwordConfirmdValidation ? "danger" : "success"}
                  errorMessage={
                    passwordConfirmdValidation && formik.errors.passwordConfirm
                  }

                />
              </div>

              <div className="btn">
                {loading ? <Button
                  type="submit"
                  className="bg-green-400 text-2xl  tracking-wide  capitalize w-full my-5 text-white shadow-lg"  >Check<Spinner color="default" size="md" />

                </Button> :
                  <Button color={(!(formik.isValid && formik.dirty)) ? "default" : "success"} type="submit" className="  text-2xl  tracking-wide  capitalize w-full my-5 text-white shadow-lg"    >
                    Register
                  </Button>}
              </div>

            </form>
          </div>
          <div className="w-1/2  capitalize  bg-gradient-to-r from-main to-socMain border-r-2  rounded-r-2xl  flex-col flex items-center px-6 py-12 drop-shadow-xl ">
            <h1 className="text-white text-4xl p-2">Create New Account</h1>
            <p className="my-3 p-10 text-center text-xl capitalize text-white">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto nostrum quibusdam voluptate et iusto delectus maxime asperiores inventore porro soluta! Iste debitis et voluptatem consequatur, inventore sapiente exercitationem officiis repellendus?</p>
            <div className=" bg-gray-200  capitalize text-lg  p-3 border rounded-2xl">
              <p>Already Have Account ? <span>
                <NavLink to="/login" className="underline">Login </NavLink>
              </span></p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
