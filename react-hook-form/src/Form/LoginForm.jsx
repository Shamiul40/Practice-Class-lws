import React from "react";
import Fieldset from "../Components/Fieldset";
import Field from "../Components/Field";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const handleInput = (data) => {
    const user = {
      email : "ab@ab.com",
      password : "12345678"

    }

    const found = user.email===data.email && user.password ===data.password;
    
    if(!found) {
      setError("root.random", {
        message :  `the user email ${data.email} is not found`,
        type :"random"
      } )
    }
    console.log(data)

  };
  return (
    <div className="m-4">
      <form onSubmit={handleSubmit(handleInput)}>
        <Fieldset lable={"React hook form"}>
          <Field lable={"email"} error={errors.email}>
            <input
              {...register("email", { required: "email is required" })}
              id="email"
              name="email"
              type="email"
              placeholder="type your email"
              className={`block w-3/12 rounded-lg border ${errors.email ? "border-red-400" : "border-gray-300"}  px-4 py-2 text-gray-900 shadow-sm sm:text-sm`}
            />
          </Field>

          <Field lable={"password"} error={errors.password}>
            <input
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 6,
                  message: "password must be atleast 6 character",
                },
              })}
              id="password"
              name="password"
              type="password"
              placeholder="type your password"
              className={`block w-3/12 rounded-lg border ${errors.password ? "border-red-400" : "border-gray-300"}  px-4 py-2 text-gray-900 shadow-sm sm:text-sm`}
            />
          </Field>
          <Field>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Submit
            </button>
          </Field>
          <div>{errors?.root?.random?.message}</div>
        </Fieldset>
      </form>
    </div>
  );
}
