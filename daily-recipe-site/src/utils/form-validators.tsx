const required = (value: any) => {
  return value ? undefined : "This field is required";
};

const passwordMatch = (value: string, second_value: string) => {
  return value === second_value ? undefined : "Password does not match";
};

const email = (value: any) => {
  if (!value) return "This field is required";
  return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "The email format is invalid"
    : undefined;
};

export const Validators = {
  required,
  passwordMatch,
  email,
};
