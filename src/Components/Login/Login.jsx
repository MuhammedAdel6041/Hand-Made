import { Input, Button, Spinner } from "@nextui-org/react";
import axios from 'axios';
import logo from "../../assets/images/Login.jpg";
import { FaLock } from "react-icons/fa";
import { FaLockOpen } from "react-icons/fa";
import "./Login.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import { useContext, useState } from "react";
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, Bounce } from 'react-toastify';
import { userContext } from "../../Context/UserContext";
// ////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////
export default function Login() {
  let { setUserToken } = useContext(userContext)
  let navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  let [loading, setLoading] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible);
  async function submitRegister(values) {
    setLoading(true);
    try {
      let { data } = await axios.post(`https://e-commerce-api-v1-cdk5.onrender.com/api/v1/auths/login`, values)
      toast.success('Welcome to Website  ', {
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
      localStorage.setItem("userToken", data.token)
      setUserToken(data.token)

      navigate('/');

    } catch (err) {
      setLoading(false);
      toast.error(err.response.data, {
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

  let passwordRegex = /[a-zA-z]{2,20}/;
  let validationSchema = yup.object({

    email: yup.string().email("email in invalid").required("email is required"),

    password: yup
      .string()
      .matches(passwordRegex, "password is invalid ")
      .required("password is required"),

  });
  let formik = useFormik({
    initialValues: {

      email: "",
      password: "",

    },
    validationSchema,
    onSubmit: submitRegister,
  });

  let emailValidation = formik.errors.email && formik.touched.email;
  let passwordValidation = formik.errors.password && formik.touched.password;

  return (
    <>
      <div className="container w-5/6 border-b border-r border-gray-400  rounded-lg shadow-lg p-1 my-5">
        <div className="concat flex ">
          <div className="w-1/2   flex p-5 drop-shadow-xl ">
            <img src={logo} alt="" className="w-full rounded-lg" />
          </div>
          <div className="w-1/2  my-auto ">
            <h1 className=" capitalize text-center text-4xl">
              Welcome Back
            </h1>

            <form className="my-4 mx-2" onSubmit={formik.handleSubmit}>


              <div className="email my-5">
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



              
              <div className="password my-5">
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

              <div className="flex justify-between items-center" >

                <div className="btn w-3/4 my-2">
                  {loading ? <Button
                    type="submit"
                    className="bg-green-400 text-2xl  tracking-wide  capitalize w-full my-5 text-white shadow-lg"  >Check<Spinner color="default" size="md" />

                  </Button> :
                    <Button color={(!(formik.isValid && formik.dirty)) ? "default" : "success"} type="submit" className="  text-2xl  tracking-wide  capitalize w-full my-5 text-white shadow-lg"    >
                      Sing Up
                    </Button>}
                </div>


                <div className="man">
                  <NavLink to="/forgetpassword">
                    <p className="capitalize underline ">Forget Password ?</p>
                  </NavLink>
                </div>
              </div>






            </form>
          </div>
        </div>
      </div>
    </>
  );
}
