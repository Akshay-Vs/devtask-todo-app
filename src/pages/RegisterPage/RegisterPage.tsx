import { useState } from "react";
import TakeInput from "../../components/Input/Input";
import Typography from "../../components/Typography";
import { inputConfig } from "./inputs.config";
import Button from "../../components/Button";
import { registerSchema } from "../../validation/registerValidation";

interface credentials {
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
  companyName: string;
  [key: string]: string | undefined;
}

const RegisterPage = () => {
  const [credentials, setCredentials] = useState<credentials>({
    fullName: "",
    email: "",
    password: "",
    phoneNumber: "",
    companyName: "",
  });
  const [error, setError] = useState();
  const [buttonState, setButtonState] = useState<
    "enabled" | "disabled" | "loading"
  >("disabled");

  const handleCredentialsChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));

    try {
      await registerSchema.validate(credentials, { abortEarly: false });
      setError(undefined);
      setButtonState("enabled");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setError(error.errors[0]);
      setButtonState("disabled");
    }
  };

  const handleCredentialsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (buttonState === "enabled") {
      setButtonState("loading");
      localStorage.setItem("isAuthenticated", "true");
      //! Store credentials in localStorage for testing purposes
      localStorage.setItem("email", credentials.email);
      localStorage.setItem("userName", credentials.fullName);
      localStorage.setItem("companyName", credentials.companyName);
      location.href = "/";
    }
  };

  return (
    <main className="flex flex-col items-center justify-start h-screen w-screen pt-16">
      <div className="flex flex-col">
        <Typography>
          <div className="w-80">
            <Typography.Heading variant="h1">
              Create your PopX account
            </Typography.Heading>
          </div>
        </Typography>

        <form className="mt-5" onSubmit={handleCredentialsSubmit}>
          {inputConfig.map((item) => (
            <TakeInput>
              <TakeInput.TextInput
                props={{
                  placeholder: item.placeholder,
                  type: item.type,
                  autoComplete: item.autoComplete,
                  required: true,
                  onChange: handleCredentialsChange,
                  value: credentials?.[item.name],
                  name: item.name,
                }}
              >
                {item.label}
              </TakeInput.TextInput>
            </TakeInput>
          ))}

          <Typography.Paragraph style="mt-3 opacity-75">
            Are you an agency?
          </Typography.Paragraph>
          <div className="w-full flex gap-5 mb-5">
            <TakeInput.RadioInput
              props={{ name: "radio", defaultChecked: true }}
            >
              Yes
            </TakeInput.RadioInput>
            <TakeInput.RadioInput props={{ name: "radio" }}>
              No
            </TakeInput.RadioInput>
          </div>

          {error && (
            <div className="w-80 mb-5 px-1 text-red-500 ">
              <Typography.Paragraph>{error}</Typography.Paragraph>
            </div>
          )}

          <Button
            props={{
              type: "submit",
            }}
            variant={buttonState === "disabled" ? "disabled" : "primary"}
          >
            <Button.Text>
              {buttonState === "loading" ? "Please wait..." : "Create Account"}
            </Button.Text>
          </Button>

          <a
            className="w-full items-end justify-end flex mt-2 text-blue-500"
            href="/login"
          >
            <Typography.Paragraph style="text-sm">
              Already have an account?
            </Typography.Paragraph>
          </a>
        </form>
      </div>
    </main>
  );
};

export default RegisterPage;
