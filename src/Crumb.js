import { useBreadcrumb } from "@fransvilhelm/react-breadcrumbs";

export function Crumb({ foo }) {
  useBreadcrumb({ label: "Crumb", url: "#test" });

  return <div>Crumb: foo={foo}</div>;
}
