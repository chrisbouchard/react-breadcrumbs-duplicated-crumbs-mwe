import { useTrail } from "@fransvilhelm/react-breadcrumbs";

export function BreadcrumbList() {
  const breadcrumbs = useTrail();

  return (
    <ul>
      {breadcrumbs.map((crumb, index) => (
        <li key={index}>
          <a href={crumb.url}>{crumb.label}</a>
        </li>
      ))}
    </ul>
  );
}
