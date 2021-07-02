import { useTrail } from "@fransvilhelm/react-breadcrumbs";

export function BreadcrumbList() {
  const breadcrumbs = useTrail();

  return (
    <ul>
      {breadcrumbs.map((crumb) => (
        <li>
          <a href={crumb.url}>{crumb.label}</a>
        </li>
      ))}
    </ul>
  );
}
