import { isUsernameTaken } from "@/constants/datastatic";
import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .matches(
      /^[a-z0-9]+$/,
      "Username must be lowercase and contain only letters and numbers without spaces"
    ),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character")
    .required("Password is required"),
});

export const registerValidationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required")
    .matches(
      /^[a-z0-9]+$/,
      "Username must be lowercase and contain only letters and numbers without spaces"
    )
    .test("is-username-taken", "Username is already taken", async (value) => {
      if (!value) return true;
      return !(await isUsernameTaken(value));
    }),
  email: Yup.string().required("Email is required").email("Invalid email format"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[\W_]/, "Password must contain at least one special character")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});
