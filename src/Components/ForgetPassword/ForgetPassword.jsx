import { NavLink, useNavigate } from 'react-router-dom';
import './ForgetPassword.module.css'
import { useState } from 'react';
import { useFormik } from "formik";
import * as yup from "yup";
import { toast, Bounce } from 'react-toastify';
import { Input, Button, Spinner } from "@nextui-org/react";
import axios from 'axios';
export default function ForgetPassword() {


  let navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  let [loading, setLoading] = useState(false)
  const toggleVisibility = () => setIsVisible(!isVisible);
  async function submitRegister(values) {
    setLoading(true);
    try {
      let { data } = await axios.post(`https://e-commerce-api-v1-cdk5.onrender.com/api/v1/auths/forgetPassword`, values)
      toast.success('Password is Reset ', {
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


  let validationSchema = yup.object({

    email: yup.string().email("email in invalid").required("email is required"),



  });
  let formik = useFormik({
    initialValues: {

      email: "",


    },
    validationSchema,
    onSubmit: submitRegister,
  });

  let emailValidation = formik.errors.email && formik.touched.email;
  let passwordValidation = formik.errors.password && formik.touched.password;












  return <>
  
    <div className="mx-auto max-w-md my-12">
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <div className="mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <h1 className="block text-2xl font-bold text-gray-800">Forgot password?</h1>
            <p className="mt-2 text-sm text-gray-600">Don't worry we'll send you reset instructions.</p>
          </div>
          <div className="mt-6">
            {/* Form */}
            <form onSubmit={formik.handleSubmit}>
              <div className="grid gap-y-4">
                {/* Form Group */}
                <div>
                  <label className="block text-gray-700 text-md mb-1 px-2" htmlFor="userEmail">
                    Email:
                  </label>
                  <div className="relative">
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

                    <p className="mt-2 hidden text-xs text-rose-600 peer-invalid:block" id="email-error">Valid email address required for the account recovery process</p>
                  </div>
                </div>
                {/* /Form Group */}
                <div className="btn w-full my-2">
                  {loading ? (
                    <Button type="submit" className="bg-green-400 text-2xl tracking-wide capitalize w-full my-5 text-white shadow-lg">
                      Check<Spinner color="default" size="md" />
                    </Button>
                  ) : (
                    <Button
                      color={!(formik.isValid && formik.dirty) ? "default" : "success"}
                      type="submit"
                      className="text-2xl tracking-wide capitalize w-full my-5 text-white shadow-lg"
                    >
                      Sing Up
                    </Button>
                  )}
                </div>
              </div>
            </form>
            {/* /Form */}
          </div>
        </div>
      </div>
      

    </div>



  </>

}

