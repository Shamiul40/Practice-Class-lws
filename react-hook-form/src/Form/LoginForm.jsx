import React from "react";
import Fieldset from "../Components/Fieldset";
import Field from "../Components/Field";

export default function LoginForm() {
  return (
    <div className="m-4">
      <form>
        <Fieldset lable={"React hook form"}>
          <Field lable={"email"}>
            <input
            name="email"
              type="email"
              placeholder="type your email"
              className=" block w-3/12 rounded-lg border-gray-300 px-4 py-2 text-gray-900 shadow-sm sm:text-sm"
            />
          </Field>

          <Field lable={"password"}>
            <input
                name="password"
              type="password"
              placeholder="type your password"
              className=" block w-3/12 rounded-lg border-gray-300 px-4 py-2 text-gray-900 shadow-sm sm:text-sm"
            />
          </Field>
          <Field>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Submit</button>
          </Field>
        </Fieldset>
      </form>
    </div>
  );
}
