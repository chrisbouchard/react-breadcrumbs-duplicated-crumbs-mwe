import { cloneElement } from "react";

export function Duplicator({ children }) {
  return cloneElement(children, { foo: "bar" });
}
