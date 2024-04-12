import * as yup from "yup";
import { getCharacterValidationError } from "../utils/getCharacterValidationError";

export const loginSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .required("Please enter a password")
    .min(4, "Password must have at least 4 characters")
    .matches(/[a-z]/, getCharacterValidationError("lowercase"))
    .matches(/[A-Z]/, getCharacterValidationError("uppercase")),
});
