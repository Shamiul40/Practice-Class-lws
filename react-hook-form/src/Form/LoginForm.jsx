import React from "react";
import Fieldset from "../Components/Fieldset";
import Field from "../Components/Field";
import { useForm } from "react-hook-form";

export default function LoginForm() {

    const {register, handleSubmit} =useForm()
    const handleInput=(data)=>{
        console.log(data)
    }
  return (
    <div className="m-4">
      <form onSubmit={handleSubmit(handleInput)}>
        <Fieldset lable={"React hook form"}>
          <Field lable={"email"}>
            <input
            {...register("email")}
              id="email"
              name="email"
              type="email"
              placeholder="type your email"
              className=" block w-3/12 rounded-lg border-gray-300 px-4 py-2 text-gray-900 shadow-sm sm:text-sm"
            />
          </Field>

          <Field lable={"password"}>
            <input
            {...register("password")}
              id="password"
              name="password"
              type="password"
              placeholder="type your password"
              className=" block w-3/12 rounded-lg border-gray-300 px-4 py-2 text-gray-900 shadow-sm sm:text-sm"
            />
          </Field>
          <Field>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
              Submit
            </button>
          </Field>
        </Fieldset>
      </form>
    </div>
  );
}
