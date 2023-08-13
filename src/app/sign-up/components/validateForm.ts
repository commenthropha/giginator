import { ClearInput, AddInputMessage } from "./updateForm";

type Props = { email: string; password: string; confirmPassword: string };

const ValidateForm = (inputs: Props) => {
  for (let [key, value] of Object.entries(inputs)) {
    ClearInput(key);
    if (CheckForEmptyInput(key, value)) {
      return false;
    }
  }

  if (ValidatePassword(inputs["password"])) {
    return false;
  }

  if (CheckIfPasswordsMatch(inputs["password"], inputs["confirmPassword"])) {
    return false;
  }

  return true;
};

const CheckForEmptyInput = (key: string, value: string) => {
  if (value == "") {
    AddInputMessage(key, "This field has been left empty.");
    return true;
  } else {
    return false;
  }
};

const ValidatePassword = (password: string) => {
  const passwordRegex =
    /^(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\-])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

  if (passwordRegex.test(password)) {
    return false;
  } else {
    AddInputMessage("password", "This password doesn't fulfill the security requirements.");
    return true;
  }
};

const CheckIfPasswordsMatch = (password: string, confirmPassword: string) => {
  if (password == confirmPassword) {
    return false;
  } else {
    AddInputMessage("confirmPassword", "Your passwords do not match.");
    return true;
  }
};

export default ValidateForm;
