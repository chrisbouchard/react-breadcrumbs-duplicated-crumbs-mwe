import { render, waitFor } from "@testing-library/react";
import { App } from "./App";

test("the breadcrumbs contain crumb twice", async () => {
  const { getAllByText } = render(<App />);
  await waitFor(() => expect(getAllByText("Crumb")).toHaveLength(2));
});
