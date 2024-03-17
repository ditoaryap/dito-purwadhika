import * as Yup from "yup";
import { withFormik } from "formik";

import instance from "../../api/api_instance";
import FormRegist from "./components/FormRegist";
import { FormValues } from "./types";
import { FormProps } from "./types";
import { useNavigate } from "react-router-dom";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(6, "terlalu pendekkk"),
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "terlalu pendekkk")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password harus mengandung setidaknya satu huruf kecil, satu huruf besar, satu angka, dan satu simbol"
    ),
});

export default function Register() {
  const navigate = useNavigate();
  const register = async (props: FormValues) => {
    const { name, email, password } = props;
    await instance.post("users", {
      name,
      email,
      password,
    });
  };

  const MyForm = withFormik<FormProps, FormValues>({
    mapPropsToValues: (props) => ({
      name: props.initialName || "",
      email: props.initialEmail || "",
      password: props.initialPassword || "",
    }),
    validationSchema: RegisterSchema,
    enableReinitialize: true,
    handleSubmit({ name, email, password }: FormValues, { resetForm }) {
      register({ name, email, password }).then(() => {
        resetForm();
        navigate("/");
      });
    },
  })(FormRegist);

  return (
    <div>
      <MyForm />
    </div>
  );
}
