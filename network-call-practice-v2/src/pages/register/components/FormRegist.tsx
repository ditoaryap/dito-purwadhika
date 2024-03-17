import { FormikProps, Form, Field } from "formik";
import { FormValues } from "../types";
import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
export default function FormRegist(props: FormikProps<FormValues>) {
  const { values, errors, touched, handleChange, handleSubmit, isSubmitting } =
    props;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">
          Name
        </label>
        <Field
          type="text"
          name="name"
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          onChange={handleChange}
          value={values.name}
        />
        {touched.name && errors.name && <span>{errors.name}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          Email
        </label>
        <Field
          type="email"
          name="email"
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          onChange={handleChange}
          value={values.email}
        />
        {touched.email && errors.email && <span>{errors.email}</span>}
      </div>
      <div className="mb-4 relative">
        {" "}
        <label htmlFor="password" className="block mb-1">
          Password
        </label>
        <Field
          type={showPassword ? "text" : "password"}
          name="password"
          className="border border-gray-300 rounded-md px-3 py-2 w-full focus:outline-none focus:border-blue-500"
          onChange={handleChange}
          value={values.password}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          {showPassword ? (
            <VisibilityOffIcon
              onClick={togglePasswordVisibility}
              className="h-5 w-5 text-gray-500 cursor-pointer"
            />
          ) : (
            <VisibilityIcon
              onClick={togglePasswordVisibility}
              className="h-5 w-5 text-gray-500 cursor-pointer"
            />
          )}
        </div>
        {touched.password && errors.password && <span>{errors.password}</span>}
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        disabled={isSubmitting}
      >
        Submit
      </button>
    </Form>
  );
}
