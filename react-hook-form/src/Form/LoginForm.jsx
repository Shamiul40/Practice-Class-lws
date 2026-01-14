import React from "react";
import Fieldset from "../Components/Fieldset";
import Field from "../Components/Field";

export default function LoginForm() {
  return (
    <div >
      <Fieldset lable={"React hook form"}>
        <Field lable={"email"}>
          <input
            type="text"
            placeholder="type your email"
            className=" block
    w-3/12
    rounded-lg
    border-gray-300
    px-4
    py-2
    text-gray-900
    shadow-sm
   
    sm:text-sm"
          />
        </Field>
        <Field lable={"password"}>
          <input
            type="password"
            placeholder="type your password"
            className=" block
    w-3/12
    rounded-lg
    border-gray-300
    px-4
    py-2
    text-gray-900
    shadow-sm
   
    sm:text-sm"
          />
        </Field>
      </Fieldset>
    </div>
  );
}
