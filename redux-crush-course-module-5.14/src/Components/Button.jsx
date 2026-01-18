import React from "react";

export default function Button({ children, type, handler }) {
    const style =
    type === "danger"
      ? "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      : "bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600";

  return (
    <div>
      <button onClick={handler} className={style}>{children}</button>
    </div>
  );
}
