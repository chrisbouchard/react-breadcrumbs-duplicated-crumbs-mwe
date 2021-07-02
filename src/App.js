import { BreadcrumbsProvider } from "@fransvilhelm/react-breadcrumbs";

import { BreadcrumbList } from "./BreadcrumbList";
import { Crumb } from "./Crumb";
import { Duplicator } from "./Duplicator";

export function App() {
  return (
    <BreadcrumbsProvider>
      <BreadcrumbList />
      <Duplicator>
        <Crumb />
      </Duplicator>
    </BreadcrumbsProvider>
  );
}
